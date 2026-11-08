
import React, { useState } from "react";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [eventName, setEventName] = useState("Rangoli");
  const [needsHostel, setNeedsHostel] = useState(false);

  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const fee = needsHostel ? 350 : 200;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isOpen) {
      setMessage("Registration is closed");
      return;
    }

    if (name.trim().length < 3) {
      setMessage("Name must contain at least 3 characters");
      return;
    }

    if (city.trim() === "") {
      setMessage("City cannot be empty");
      return;
    }

    const newCount = count + 1;

    setCount(newCount);
    setMessage(`Registration #${newCount} done for ${name}`);

    setName("");
    setCity("");
    setEventName("Rangoli");
    setNeedsHostel(false);
  };

  const handleToggle = () => {
    const newStatus = !isOpen;

    setIsOpen(newStatus);

    if (newStatus) {
      setMessage("Registration is open");
    } else {
      setMessage("Registration is closed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Fest Registration Form</h1>

      <button onClick={handleToggle}>
        Toggle Registration
      </button>

      <h3>
        Registration Status: {isOpen ? "Open" : "Closed"}
      </h3>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <br />

        <div>
          <label>City: </label>
          <input
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Event: </label>
          <select
            value={eventName}
            onChange={(event) => setEventName(event.target.value)}
          >
            <option value="Rangoli">Rangoli</option>
            <option value="Quiz">Quiz</option>
            <option value="Dance">Dance</option>
          </select>
        </div>

        <br />

        <div>
          <label>
            <input
              type="checkbox"
              checked={needsHostel}
              onChange={(event) => setNeedsHostel(event.target.checked)}
            />
            I need hostel stay
          </label>
        </div>

        <br />

        <h3>
          Registering: {name || "Name"} from {city || "City"} for {eventName}
        </h3>

        <h3>Registration Fee: ₹{fee}</h3>

        <button type="submit">Submit Registration</button>

      </form>

      <hr />

      <h3>Total Successful Registrations: {count}</h3>

      <p>{message}</p>
    </div>
  );
}

export default RegistrationForm;
