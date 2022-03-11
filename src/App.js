import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slider from 'react-input-slider';


//import countries from "./countries";

export default function App() {

  const [state, setState] = React.useState({ answerInt: 10 });

  const [id] = React.useState("");
  
  const [firstName, setfirstName] = React.useState("");
  const [lastName, setlastName] = React.useState("");
  const [email, setemail] = React.useState("");
  

  const [answerOne, setanswerOne] = React.useState("");
  const [answerTwo, setanswerTwo] = React.useState("");
  const [answerThree, setanswerThree] = React.useState("");
  const [answerFour, setanswerFour] = React.useState("");
  const [answerFive, setanswerFive] = React.useState("");
  const [answerSix, setanswerSix] = React.useState("");
  //const [answerSeven, setanswerSeven] = React.useState("");
  const [answerInt] = React.useState("");
  
  const [answerSeven, setanswerSeven] = React.useState("");
  const [answerEight, setanswerEight] = React.useState("");



  //const [country, setCountry] = React.useState("");
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);
  
  const notify = () => toast.success('🤘 Submitted! Thanks A Bunch!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });


  const handleSubmit = (event) => {

    console.log(`
    {
      id: ${Number(id)}
      firstName: ${firstName}
      lastName: ${lastName}
      email: ${email}
      answerOne: ${answerOne}
      answerTwo: ${answerTwo}
      answerThree: ${answerThree}
      answerFour: ${answerFour}
      answerFive: ${answerFive}
      answerSix: ${answerSix}
      answerInt: ${answerInt}
      answerSeven: ${answerSeven}
      answerEight: ${answerEight}
      Accepted Terms: ${acceptedTerms}
    }
    `);

    fetch('https://dgit-json-db.herokuapp.com/data', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: "",
        firstName: firstName,
        lastName: lastName,
        email: email,
        answerOne: answerOne,
        answerTwo: answerTwo,
        answerThree: answerThree,
        answerFour: answerFour,
        answerFive: answerFive,
        answerSix: answerSix,
        answerInt: state.x,
        answerSeven: answerSeven,
        answerEight: answerEight,
      })
    })
    
    event.preventDefault();
  }

//   fetch('https://localhost:3000/data/', {
//   method: 'POST',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     id: "",
//     firstName: firstName,
//     lastName: lastName,
//     answerOne: answerOne,
//     answerTwo: answerTwo,
//     answerThree: answerThree,
//     answerFour: answerFour,
//     answerFive: answerFive,
//     acceptedTerms: acceptedTerms
//   })
// })
  
  return (
    <form onSubmit={handleSubmit}>
      <h1>REMOTE WORKING QUESTIONNAIRE</h1>
      <p align="center">Small Questionnaire based around the topic Remote Working. All the data collected will not be public but will aid my personal research. <b>Protected under GDPR</b></p>

      <label>
        <b>First Name:</b>
        <input
          name="firstName"
          type="firstName"
          value={firstName}
          onChange={e => setfirstName(e.target.value)}
          required />
      </label>
      
      <label>
        <b>Last Name:</b>
        <input
          name="lastName"
          type="lastName"
          value={lastName}
          onChange={e => setlastName(e.target.value)}
          required />
      </label>

      <label>
        <b>Email:</b>
        <input
          name="email"
          type="email"
          value={email}
          onChange={e => setemail(e.target.value)}
          required />
      </label>

  <br></br>
  <br></br>
  <br></br>

      <label align="left">
      Many individuals epecially in larger cities such as Manchester and London, workers during the Covid-19 Outbreak have adapted to Remote Working. <b>Before The Outbreak, Were You Making Use Of Remote Working?</b>
        <input
          name="answerOne"
          type="answerOne"
          value={answerOne}
          onChange={e => setanswerOne(e.target.value)}
          required />
      </label>

      <label>
        <b>If You Were Remote Working During The Outbreak, Did You Feel Like You Wanted To Go Back To The Workplace?</b> (Leave Blank If Not Applicable)
        <input
          name="answerTwo"
          type="answerTwo"
          value={answerTwo}
          onChange={e => setanswerTwo(e.target.value)}
           />
      </label>

      <label>
      <b>If Your Employer/Self Told You To Return To Regular Working Conditions, How Will This Affect Your View Of Them?</b>
        <input
          name="answerThree"
          type="answerThree"
          value={answerThree}
          onChange={e => setanswerThree(e.target.value)}
          required />
      </label>
      <br></br>
      <br></br>
      <br></br>
      <label>
        <b>Could your job make use of Remote Working?</b>
        <input
          name="answerFour"
          type="answerFour"
          value={answerFour}
          onChange={e => setanswerFour(e.target.value)}
          required />
          <label>If Yes, How? <b>Explain Below</b></label>
                  <input
          name="answerFive"
          type="answerFive"
          value={answerFive}
          onChange={e => setanswerFive(e.target.value)}
          required />
      </label>
      <br></br>
      <br></br>
      <br></br>
      <label>
      <b>What You Least Looking Forward To When You Returned To Your Workplace?</b>
        <input
          name="answerSix"
          type="answerSix"
          value={answerSix}
          onChange={e => setanswerSix(e.target.value)}
          required />
      </label>

      <label>
      <b>On A Scale of <code>1 / 100</code> Did You Enjoy Making Use Of Remote Working?</b>
        <br></br>

        {/* <input
          name="answerSeven"
          type="answerSeven"
          value={answerSeven}
          onChange={e => setanswerSeven(e.target.value)}
          required /> */}

      </label>
      
      <div className="sliderbar" align="center">
      
      ({state.x})
      <Slider x={state.x} onChange={setState} />
      </div>  

      <br></br>
      <br></br>
      <br></br>
      <label>
      <b>When Working From Home, Did You Take Regualr Breaks?</b> (Leave Blank if This Does Not Apply)
        <input
          name="answerSeven"
          type="answerSeven"
          value={answerSeven}
          onChange={e => setanswerSeven(e.target.value)}
          />
      </label>

      <br></br>
      <br></br>
      <br></br>
      <label>
      <b>Does Your Abode Have Suitable Space For Work / A Work Room / Study?</b> (Leave Blank if This Does Not Apply)
        <input
          name="answerEight"
          type="answerEight"
          value={answerEight}
          onChange={e => setanswerEight(e.target.value)}
          />
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
<br></br>
<br></br>
<br></br>

      <label>
        <input
          name="acceptedTerms"
          type="checkbox"
          onChange={e => setAcceptedTerms(e.target.value)}
          required />
I Agree & I Consent To Submitting The Following Data.                
      </label>

      <button onClick={notify}>Submit</button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
    </form>
  );
}
