// import React, { useState } from "react";
// import "./index.css";

// const App = () => {
//   const [name, setName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [fullName, setFullName] = useState("");
//   const [lastNameNew, setLastNameNew] = useState("");
  
//   const onsubmit = (event) => {
//     event.preventDefault();
//     setFullName(name);
//     setLastNameNew(lastName)
//   };
//   const inputEvent = (event) => {
//     setName(event.target.value)
//   }
//   const inputEventTwo = (event) => { 
//     setLastName(event.target.value)
    
//   }
//   return (
//     <><form onClick={onsubmit}>
//       <h1>HELLO {fullName} {lastName} </h1>
//       <br />
//       <input type="text" placeholder="ENTER YOUR NAME" onChange={inputEvent} />
//       <br />
//       <input type="text" placeholder="ENTER YOUR NAME"  onChange={inputEventTwo} />
//       <br />
//       <br/><button type="submit" > CLICK ME 👍</button>
//      </form>
//     </>
//   )
// }
//     export default App;


// this  is for three input with emial

// import React, { useState } from "react";
// import "./index.css";

// const App = () => {
//   const [fullName, setFullName] = useState({
//     fname: '',
//     lname: ''
//   });
//   const onSubmits = (event) => {
//     event.preventDefault();
//     alert("form submitted");
//   };
//   const inputEvent = (event) => {
//     console.log(event.target.value);
//   console.log(event.target.name);
//   }
 
//   return (
//     <><form onSubmit={onSubmits}>
//       <h1>HELLO {fullName.fname} {lastName.ln ame} </h1>
//       <br />
//       <input type="text" placeholder="ENTER YOUR NAME" onChange={inputEvent} />
//       <br />
//       <input type="text" placeholder="ENTER YOUR NAME"  onChange={inputEventTwo} />
//       <br />
//       <br/><button type="submit" > CLICK ME 👍</button>
//      </form>
//     </>
//   )
// }
//     export default App;

// import React, { useState } from "react";
// import "./index.css";

// const App = () => {
//   const [fullName, setFullName] = useState({
//     fname: '',
//     lname: '',
//     email: '',
//     phone: ''
//   });
//   const inputEvent = (event) => {
//     // console.log(event.target.value);
//     // console.log(event.target.name);
//     const {value, name} = event.target;
  
 
//     setFullName((preValue) => {
//       console.log(preValue)
//       if (name === "fname") {
//         return {
//           fname: value,
//           lname: preValue.lname,
//           email: preValue.email,
//           phone: preValue.phone

//         };
//       } else if (name === "lname") {
//         return {
//           fname: preValue.fname,
//           lname: value,
//           email: preValue.email,
//           phone: preValue.phone
//         };
      
//       } else if (name === "email") {
//         return {
//           fname: preValue.fname,
//           lname: preValue.lname,
//           email: value,
//           phone: preValue.phone
//         };
    
//       } else if (name === "phone") {
//         return {
//           fname: preValue.fname,
//           lname: preValue.lname,
//           email: preValue.email,
//           phone: value
      
//         };
//       }
    
       
//     });
//   };
//   const onSubmits = (event) => {
//     event.preventDefault(); 
//     alert("form submitted");
//   };

//   return (
//     <><form onSubmit={onSubmits}>
//       <h1>HELLO {fullName.fname} {fullName.lname} </h1> 
//       <p> {fullName.email} </p>
//       <p> {fullName.phone } </p>
//       <br />
//       <input type="text" name="fname" placeholder="ENTER YOUR NAME" onChange={inputEvent} value={ fullName.fname} />
//       <br />
//       <input type="text" name="lname" placeholder="ENTER YOUR NAME"  onChange={inputEvent} value={fullName.lname} />
//       <br />
//       <input type="text" name="email" placeholder="ENTER YOUR NAME"  onChange={inputEvent} value={fullName.email} />
//       <br />
//       <input type="text" name="phone" placeholder="ENTER YOUR NAME"  onChange={inputEvent} value={fullName.phone} />
//       <br />
//       <br/><button type="submit" > CLICK ME 👍</button>
//      </form>
//     </>
//   )
//   }
//     export default App;



import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [fullName, setFullName] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: ''
  });
  const inputEvent = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    const {value, name} = event.target;
  
 
    setFullName((preValue) => {
      console.log(preValue)
      return {
        ...preValue,
        [name]: value
      }
       
    });
  };
  const onSubmits = (event) => {
    event.preventDefault(); 
    alert("form submitted");
  };

  return (
    <><form onSubmit={onSubmits}>
      <h1>HELLO {fullName.fname} {fullName.lname} </h1> 
      <p> {fullName.email} </p>
      <p> {fullName.phone } </p>
      <br />
      <input type="text" name="fname" placeholder="ENTER YOUR NAME" onChange={inputEvent} value={ fullName.fname} />
      <br />
      <input type="text" name="lname" placeholder="ENTER YOUR NAME"  onChange={inputEvent} value={fullName.lname} />
      <br />
      <input type="text" name="email" placeholder="ENTER YOUR NAME"  onChange={inputEvent} value={fullName.email} />
      <br />
      <input type="text" name="phone" placeholder="ENTER YOUR NAME"  onChange={inputEvent} value={fullName.phone} />
      <br />
      <br/><button type="submit" > CLICK ME 👍</button>
     </form>
    </>
  )
  }
    export default App;