
import React, { useState } from "react";
import HostelBadge from "./HostelBadge";

function App() {
  const [registrations, setRegistrations] = useState([
    { id: 1, name: "Rahul Patel", city: "Ahmedabad", eventName: "Rangoli", needsHostel: true },
    { id: 2, name: "Priya Shah", city: "Surat", eventName: "Quiz", needsHostel: false },
    { id: 3, name: "Amit Kumar", city: "Mumbai", eventName: "Rangoli", needsHostel: true },
    { id: 4, name: "Neha Sharma", city: "Jaipur", eventName: "Quiz", needsHostel: true },
    { id: 5, name: "Karan Mehta", city: "Vadodara", eventName: "Rangoli", needsHostel: false },
    { id: 6, name: "Riya Verma", city: "Delhi", eventName: "Rangoli", needsHostel: true }
  ]);

  const [filterEvent, setFilterEvent] = useState("All");

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [eventName, setEventName] = useState("Rangoli");
  const [needsHostel, setNeedsHostel] = useState(false);

  // Add new registration
  const handleSubmit = (e) => {
    e.preventDefault();

    const newRegistration = {
      id: Date.now(),
      name,
      city,
      eventName,
      needsHostel
    };

    setRegistrations(prev => [...prev, newRegistration]);

    setName("");
    setCity("");
    setEventName("Rangoli");
    setNeedsHostel(false);
  };

  // Remove registration
  const handleRemove = (id) => {
    setRegistrations(prev =>
      prev.filter(reg => reg.id !== id)
    );
  };

  // Filter registrations
  const filteredRegistrations =
    filterEvent === "All"
      ? registrations
      : registrations.filter(
          reg => reg.eventName === filterEvent
        );

  // Count hostel rooms
  const hostelRooms = registrations.filter(
    reg => reg.needsHostel
  ).length;

  return (
    <div style={{ padding: "20px" }}>

      <h1>Fest Registration</h1>

      <h2>Register for an Event</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>City: </label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <br />

        <div>
          <label>Event: </label>
          <select
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
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
              onChange={(e) => setNeedsHostel(e.target.checked)}
            />
            Need Hostel Accommodation
          </label>
        </div>

        <br />

        <button type="submit">Register</button>

      </form>

      <hr />

      <h2>Event Registrations</h2>

      <h3>Hostel rooms needed: {hostelRooms}</h3>

      <label>Filter by Event: </label>

      <select
        value={filterEvent}
        onChange={(e) => setFilterEvent(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Rangoli">Rangoli</option>
        <option value="Quiz">Quiz</option>
        <option value="Dance">Dance</option>
      </select>

      {registrations.length === 0 ? (
        <p>No registrations yet. Be the first!</p>
      ) : filteredRegistrations.length === 0 ? (
        <p>No registrations for {filterEvent}</p>
      ) : (
        <ul>
          {filteredRegistrations.map(reg => (
            <li key={reg.id}>
              <strong>{reg.name}</strong>
              {" - "}
              {reg.city}
              {" - "}
              {reg.eventName}

              <HostelBadge needsHostel={reg.needsHostel} />

              {" "}

              <button onClick={() => handleRemove(reg.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}

export default App;
