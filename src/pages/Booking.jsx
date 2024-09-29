import { useEffect, useRef, useState } from "react";

function Booking() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [preferredName, setPreferredName] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [instagram, setInstagram] = useState("");
  const [descTattoo, setDescTattoo] = useState("");
  const [files, setFiles] = useState([]);

  const fileRef = useRef(null);

  const [monday, setMonday] = useState(() => {
    return localStorage.getItem("monday") === "true";
  });
  const [tuesday, setTuesday] = useState(() => {
    return localStorage.getItem("tuesday") === "true";
  });
  const [friday, setFriday] = useState(() => {
    return localStorage.getItem("friday") === "true";
  });
  const [saturday, setSaturday] = useState(() => {
    return localStorage.getItem("saturday") === "true";
  });
  const [tattooColor, setTattooColor] = useState("");
  const [workAround, setWorkAround] = useState("");

  const deleteLocalStorage = () => {
    if (localStorage.length > 0) {
      localStorage.clear();
    }
  };

  function resetValues() {
    setFirstName("");
    setLastName("");
    setPreferredName("");
    setPronouns("");
    setEmail("");
    setNumber("");
    setInstagram("");
    setDescTattoo("");
    setTattooColor("");
    setWorkAround("");
    setMonday(false);
    setTuesday(false);
    setFriday(false);
    setSaturday(false);
    setFiles();
    fileRef.current.value = "";
  }

  // Check instragram handle fits within guidelines
  function checkInstagram(e) {
    let input = e.target.value;
    input = input.replace(/@/g, "");
    const regex = /^[ A-Za-z0-9_.\s]*$/i;
    if (regex.test(input)) {
      const userName = instagramHandle(e.target.value);
      setInstagram(userName || "");
      localStorage.setItem(e.target.id, userName);
    } else {
      console.error("Cannot contain that");
    }
  }

  // Add '@' to instagram handle
  function instagramHandle(userName) {
    if (!userName.includes("@")) {
      return "@" + userName;
    } else {
      userName = userName.replace(/@/g, "");
      return "@" + userName;
    }
  }

  // Check the phone number input for validity
  function checkNumber(e) {
    const numberInput = e.target.value;
    // Only allow numbers
    const numberRegex = /^[0-9]*$/;
    if (numberRegex.test(numberInput)) {
      setNumber(numberInput || "");
      localStorage.setItem(e.target.id, numberInput);
    }
  }

  // Load values from local storage & run specific functions
  function loadLocalStorage() {
    const setterMap = {
      fname: setFirstName,
      lname: setLastName,
      pname: setPreferredName,
      pronouns: setPronouns,
      email: setEmail,
      number: setNumber,
      instagram: setInstagram,
      descTattoo: setDescTattoo,
      tattooColor: setTattooColor,
      workAround: setWorkAround,
      monday: setMonday,
      tuesday: setTuesday,
      friday: setFriday,
      saturday: setSaturday,
    };

    if (localStorage.length > 0) {
      Object.keys(localStorage).forEach(function (key) {
        if (key in setterMap) {
          const value = localStorage.getItem(key);
          setterMap[key](
            value === "true" ? true : value === "false" ? false : value
          );
        }
      });
    }
  }

  // Store target's values into local storage
  function storeValue(e) {
    localStorage.setItem(e.target.id, e.target.value);
  }

  /**
   * Handle the submit button with custom code
   * @param {Submit} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "http://192.168.50.173:3000/booking"; //TODO: Change this on live server

    const booking = {
      firstName: firstName,
      lastName: lastName,
      prefName: preferredName,
      pronouns: pronouns,
      email: email,
      number: number,
      instagram: instagram,
      descTattoo: descTattoo,
      availMonday: monday,
      availTuesday: tuesday,
      availFriday: friday,
      availSaturday: saturday,
      tattooColor: tattooColor,
      workAround: workAround,
    };

    // Send booking information to server
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ booking }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => {
      // Handle the responses
      if (response.status === 201) {
        window.location.hash = "#thank-you";
      } else if (response.status === 500) {
        window.location.hash = "#error";
      }
    });
  };

  useEffect(() => {
    // Load data from local storage when component mounts
    loadLocalStorage();
  }, []);

  return (
    <>
      <div className="booking-div">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {/* Names */}
          <div className="booking-label">
            Name: <span className="required">*</span>
          </div>
          <div className="booking-inputs">
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="First Name"
              title="first-name"
              required
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                storeValue(e);
              }}
            ></input>
            <input
              type="text"
              id="lname"
              name="lname"
              placeholder="Last Name"
              title="last-name"
              required
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                storeValue(e);
              }}
            ></input>
          </div>
          {/* Preferred Name */}
          <div className="booking-label">Preferred Name:</div>
          <div className="booking-inputs">
            <input
              type="text"
              id="pname"
              name="preferred-name"
              title="preferred-name"
              placeholder="If differs from first name"
              value={preferredName}
              onChange={(e) => {
                setPreferredName(e.target.value);
                storeValue(e);
              }}
            ></input>
          </div>
          {/* Pronouns */}
          <div className="booking-label">
            Pronouns: <span className="required">*</span>
          </div>
          <div className="pronoun-div">
            <select
              id="pronouns"
              title="pronouns"
              className="pronouns"
              name="Pronouns:"
              value={pronouns}
              onChange={(e) => {
                setPronouns(e.target.value);
                storeValue(e);
              }}
              required
            >
              <option hidden>Select pronouns</option>
              <option value="She/Her">She/Her</option>
              <option value="He/Him">He/Him</option>
              <option value="They/Them">They/Them</option>
            </select>
          </div>
          {/* Email */}
          <div className="booking-label">
            Email: <span className="required">*</span>
          </div>
          <div className="booking-inputs">
            <input
              className="email-input"
              type="email"
              id="email"
              title="email"
              name="Email:"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                storeValue(e);
              }}
            ></input>
          </div>
          {/* Phone Numer */}
          <div className="booking-label">
            Phone Number: <span className="required">*</span>
          </div>
          <div className="booking-inputs">
            <input
              className="number-input"
              type="tel"
              id="number"
              title="number"
              name="phone-number"
              placeholder="## #### ####"
              maxLength={10}
              value={number}
              onChange={(e) => {
                checkNumber(e);
              }}
              required
            ></input>
          </div>
          {/* Instagram */}
          <div className="booking-label">
            Instagram Username: <span className="required">*</span>
          </div>
          <div className="booking-inputs">
            <input
              type="text"
              id="instagram"
              title="instagram"
              name="Instagram Username:"
              placeholder="@"
              value={instagram}
              maxLength={31}
              onChange={checkInstagram}
            ></input>
          </div>
          {/* Description of Tattoo */}
          <div className="booking-label">
            Description of Tattoo: <span className="required">*</span>
          </div>
          <div className="booking-inputs">
            <textarea
              id="descTattoo"
              title="description"
              name="Tattoo Description:"
              placeholder="If you'd like several tattoos, please section with paragraphs"
              rows="6"
              cols="45"
              required
              value={descTattoo}
              onChange={(e) => {
                setDescTattoo(e.target.value);
                storeValue(e);
              }}
            ></textarea>
          </div>
          {/* Avalibility */}
          <div className="booking-label">
            Availability? <span className="required">*</span>
          </div>
          <div id="availability-div">
            <div className="availability-label">Monday: </div>
            <div className="checkbox-input">
              <input
                type="checkbox"
                id="monday"
                title="monday"
                name="Monday:"
                checked={monday}
                onChange={(e) => {
                  setMonday(e.target.checked);
                  localStorage.setItem(e.target.id, e.target.checked);
                }}
              ></input>
            </div>
            <div className="availability-label">Friday: </div>
            <div className="checkbox-input">
              <input
                type="checkbox"
                id="friday"
                title="friday"
                name="Friday"
                checked={friday}
                onChange={(e) => {
                  setFriday(e.target.checked);
                  localStorage.setItem(e.target.id, e.target.checked);
                }}
              ></input>
            </div>
          </div>
          <div id="availability-div">
            <div className="availability-label">Tuesday: </div>
            <div className="checkbox-input">
              <input
                type="checkbox"
                id="tuesday"
                title="tuesday"
                name="Tuesday:"
                checked={tuesday}
                onChange={(e) => {
                  setTuesday(e.target.checked);
                  localStorage.setItem(e.target.id, e.target.checked);
                }}
              ></input>
            </div>
            <div className="availability-label">Saturday: </div>
            <div className="checkbox-input">
              <input
                type="checkbox"
                id="saturday"
                title="saturday"
                name="Saturday"
                checked={saturday}
                onChange={(e) => {
                  setSaturday(e.target.checked);
                  localStorage.setItem(e.target.id, e.target.checked);
                }}
              ></input>
            </div>
          </div>
          {/* Black & Grey or Color */}
          <div className="booking-label">
            Black & Grey or Color: <span className="required">*</span>
          </div>
          <div>
            <select
              id="tattooColor"
              title="tattooColor"
              name="Black & Grey or Color:"
              required
              value={tattooColor}
              onChange={(e) => {
                setTattooColor(e.target.value);
                storeValue(e);
              }}
            >
              <option hidden>Select an option</option>
              <option value="Black & Grey">Black & Grey</option>
              <option value="Color">Color</option>
            </select>
          </div>
          {/* Work Around Gaps */}
          <div className="booking-label">
            Will I be working around other tattoos/filling a gap?:{" "}
            <span className="required">*</span>
          </div>
          <div>
            <select
              id="workAround"
              title="workAround"
              name="Will I be working around other tattoos/filling a gap?"
              value={workAround}
              onChange={(e) => {
                setWorkAround(e.target.value);
                storeValue(e);
              }}
              required
            >
              <option hidden>Select an option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="booking-label">
            Upload a reference photos: <span className="required">*</span>
          </div>
          <div>
            {/* <input
              type="file"
              id="reference-files"
              name="reference-files"
              ref={fileRef}
              onChange={(e) => {
                setFiles(e.target.files);
              }}
              multiple
            /> */}
          </div>
          <div className="booking-button-div">
            <button
              className="reset-form-button"
              onClick={(event) => {
                event.preventDefault();
                deleteLocalStorage();
                resetValues();
              }}
            >
              Reset
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Booking;
