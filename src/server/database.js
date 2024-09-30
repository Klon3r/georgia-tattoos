import pg from "pg";
import dotenv from "dotenv";
const { Pool } = pg;

dotenv.config({ path: "../../.env" });

const tableName = "booking_test_sept_2024";

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
function createTable() {
  // SQL for create table
  const createTableSQL = `
  CREATE TABLE IF NOT EXISTS ${tableName} (
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

  // Connect to the database and attempt to create table
  database
    .connect()
    .then((client) => {
      database.query(createTableSQL);
      console.log("Creating Table or Table Already Exists");
      client.release();
    })
    // ERROR
    .catch((err) => {
      console.err("There was an error creating the table: ", err);
    });
}

/**
 * Delete a specified table in the database if it exists
 * @param {string} tableName
 */
function deleteTable(tableName) {
  database
    .connect()
    .then((client) => {
      database.query(`DROP TABLE IF EXISTS ${tableName}`);
      console.log(`${tableName} has been deleted`);
    })
    .catch((err) => {
      console.err("There was an error deleting the table: ", err);
    });
}

/**
 * Insert the booking details into the database
 * @param {string} firstName First Name
 * @param {string} lastName Last Name
 * @param {string} prefName Preferred Name
 * @param {string} pronouns Pronouns Used
 * @param {string} email Email
 * @param {string} instagram Instagram Handle
 * @param {string} descTattoo Description of Tattoo
 * @param {boolean} availMon Are they avaiable Monday
 * @param {boolean} availTue Are they avaiable Tuesday
 * @param {boolean} availFri Are they avaiable Friday
 * @param {boolean} availSat Are they avaiable Saturday
 * @param {string} tattooColor Is it color or black and grey?
 * @param {boolean} workAround Is it working around another tattoo?
 */
export function insertBooking(
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
  const tableName = "booking_test_sept_2024";

  // Connect info for database
  const database = new Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: process.env.HOST,
    database: process.env.DATABASE,
    port: process.env.PORT,
  });

  let client;

  database
    .connect()
    .then((connectedClient) => {
      client = connectedClient;

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

      return client.query(query, values);
    })
    .then(() => {
      console.warn(`Booking: ${firstName} ${lastName} added to the database`);
    })
    .finally(() => {
      // Release the client connection
      if (client) {
        client.release();
      }
    })
    // ERROR
    .catch((err) => {
      console.error(
        "There was an error while inserting into the database: ",
        err
      );
    });
}
