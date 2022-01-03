import React from "react";
//import countries from "./countries";

export default function App() {
  const [dName, setdName] = React.useState("");
  const [gameName, setgameName] = React.useState("");
  const [parts, setparts] = React.useState("");
  //const [country, setCountry] = React.useState("");
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleSubmit = (event) => {
    console.log(`
      dName: ${dName}
      gameName: ${gameName}
      parts: ${parts}
      Accepted Terms: ${acceptedTerms}
    `);
    
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>TR4FFIC: ORDER</h1>

      <label>
        Discord Name:
        <input
          name="dName"
          type="dName"
          value={dName}
          onChange={e => setdName(e.target.value)}
          required />
      </label>
      
      <label>
        In-Game Name:
        <input
          name="gameName"
          type="gameName"
          value={gameName}
          onChange={e => setgameName(e.target.value)}
          required />
      </label>

      <label>
        Parts:
        <input
          name="parts"
          type="parts"
          value={parts}
          onChange={e => setparts(e.target.value)}
          required />
      </label>

      {/* <label>
        Country:
        <select
          name="country"
          value={country}
          onChange={e => setCountry(e.target.value)}
          required>
          <option key=""></option>
          {countries.map(country => (
            <option key={country}>{country}</option>
          ))}
        </select>
      </label> */}

      <label>
        <input
          name="acceptedTerms"
          type="checkbox"
          onChange={e => setAcceptedTerms(e.target.value)}
          required />
I Agree To Wait Until Contacted By A Representative.                
      </label>

      <button>Submit Order</button>
    </form>
  );
}
