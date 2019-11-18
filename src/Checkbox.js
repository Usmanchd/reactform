import React, { useState } from 'react';

function Checkbox() {
  const [state, setstate] = useState({
    id: '',
    userName: ''
  });
  const handleChange = e => {
    let newstate = { ...state };
    newstate[e.target.name] = e.target.value;
    setstate(newstate);
    console.log(newstate);
  };

  return (
    <React.Fragment>
      <input
        name="id"
        type="text"
        placeholder="ID.."
        value={state.id}
        onChange={handleChange}
      />
      <br />
      <input
        name="userName"
        type="text"
        placeholder="UserName.."
        value={state.userName}
        onChange={handleChange}
      />
      <h1>User Input</h1>
      <p>
        <b>ID:</b> {state['id']}
      </p>
      <p>
        <b>UserName:</b> {state['userName']}
      </p>
    </React.Fragment>
  );

  // const WHATSAPP = 'Whats app';
  // const [addon, setaddon] = useState({
  //   WHATSAPP: false,
  //   FaceBook: false,
  //   Instagram: false
  // });
  // const handleCheckBox = event => {
  //   let dup = { ...addon };
  //   dup[event.target.name] = event.target.checked;
  //   setaddon(dup);
  // };

  // return (
  //   <div>
  //     <label className="checkbox">
  //       <input
  //         name={WHATSAPP}
  //         type="checkbox"
  //         checked={addon.Whatsapp}
  //         onChange={handleCheckBox}
  //       />
  //       Whatsapp
  //     </label>
  //     <label className="checkbox">
  //       <span className="check"></span>
  //       <input
  //         name="FaceBook"
  //         type="checkbox"
  //         checked={addon.FaceBook}
  //         onChange={handleCheckBox}
  //       />
  //       FaceBook
  //     </label>
  //     <label className="checkbox">
  //       <input
  //         name="Instagram"
  //         type="checkbox"
  //         checked={addon.Instagram}
  //         onChange={handleCheckBox}
  //       />
  //       Instagram
  //     </label>
  //     <div>
  //       <h1>Your Selection</h1>
  //       <p>{addon[WHATSAPP] && WHATSAPP}</p>
  //       <p>{addon['FaceBook'] && 'FaceBook'}</p>
  //       <p>{addon['Instagram'] && 'Instagram'}</p>
  //     </div>
  //   </div>
  // );
}
export default Checkbox;
