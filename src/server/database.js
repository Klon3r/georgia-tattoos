import dotenv from "dotenv";
dotenv.config();

import pg from "pg";
const { Pool } = pg;

const tableName = "ict_booking_project";

const database = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.HOST,
  database: process.env.DATABASE,
  port: process.env.PORT,
});

/**
 * Create a table in the booking database using 'tableName'
 */
async function createTable(table) {
  const createTableSQL = `
  CREATE TABLE IF NOT EXISTS ${table} (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    preferred_name VARCHAR(50),
    pronouns VARCHAR(20) NOT NULL,
    email VARCHAR(100) NOT NULL,
    number VARCHAR(10) NOT NULL, 
    instagram VARCHAR(32) NOT NULL,
    description_of_tattoo TEXT NOT NULL,
    available_monday BOOLEAN DEFAULT FALSE,
    available_tuesday BOOLEAN DEFAULT FALSE,
    available_friday BOOLEAN DEFAULT FALSE,
    available_saturday BOOLEAN DEFAULT FALSE,
    location_on_body TEXT NOT NULL,
    size_of_tattoo VARCHAR(100) NOT NULL,
    tattoo_color VARCHAR(20) NOT NULL,
    work_around BOOLEAN NOT NULL
  );
  `;

  try {
    const client = await database.connect();
    await client.query(createTableSQL);
    //console.log("Creating Table or Table Already Exists");
    client.release();
  } catch (err) {
    console.error("There was an error creating the table: ", err);
  }
}

/**
 * Insert the booking details into the database
 */
export async function insertBooking(
  firstName,
  lastName,
  prefName,
  pronouns,
  email,
  number,
  instagram,
  descTattoo,
  availMon,
  availTue,
  availFri,
  availSat,
  locationOnBody,
  sizeTattoo,
  tattooColor,
  workAround
) {
  await createTable(tableName);

  const query = `
    INSERT INTO ${tableName} 
    (first_name, last_name, preferred_name, pronouns, email, number, instagram, description_of_tattoo, available_monday, available_tuesday, available_friday, available_saturday, location_on_body, size_of_tattoo, tattoo_color, work_around) 
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16);
  `;

  const values = [
    firstName,
    lastName,
    prefName,
    pronouns,
    email,
    number,
    instagram,
    descTattoo,
    availMon,
    availTue,
    availFri,
    availSat,
    locationOnBody,
    sizeTattoo,
    tattooColor,
    workAround,
  ];

  try {
    const client = await database.connect();
    await client.query(query, values);
    console.log(`Booking: ${firstName} ${lastName} added to the database`);
    client.release();
  } catch (err) {
    console.error(
      "There was an error while inserting into the database: ",
      err
    );
  }
}
