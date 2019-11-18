import React, { useState, useEffect } from 'react';
import logo from './5.png';
import { Icon } from 'react-icons-kit';
import { ic_person } from 'react-icons-kit/md/ic_person';
// import { ic_confirmation_number } from 'react-icons-kit/md/ic_confirmation_number';
import { ic_delete } from 'react-icons-kit/md/ic_delete';
import { ic_mode_edit } from 'react-icons-kit/md/ic_mode_edit';


function App() {
  // const [Products, setProducts] = useState([
  //   {
  //     id: 1,
  //     name: 'Led',
  //     category: 'Electronics',
  //     Count: 1
  //   },
  //   {
  //     id: 2,
  //     name: 'Bike',
  //     category: 'Vehicle',
  //     Count: 2
  //   },
  //   {
  //     id: 3,
  //     name: 'Iphone',
  //     category: 'Electronics',
  //     Count: 0
  //   },
  //   {
  //     id: 3,
  //     name: 'Iphone',
  //     category: 'Electronics',
  //     Count: 0
  //   },
  //   {
  //     id: 2,
  //     name: 'Bike',
  //     category: 'Vehicle',
  //     Count: 2
  //   }
  // ]);

  // const increase = product => {
  //   let newarr = Products.map(p =>
  //     p.name === product.name ? { ...p, Count: p.Count + 1 } : p
  //   );
  //   setProducts(newarr);
  // };
  // const decrease = product => {
  //   let newarr = Products.map(p =>
  //     p.name === product.name
  //       ? { ...p, Count: p.Count === 0 ? p.Count : p.Count - 1 }
  //       : p
  //   );
  //   setProducts(newarr);
  // };
  // const remove = product => {
  //   let newarr = Products.filter(p => p !== product);
  //   setProducts(newarr);
  // };
  // const style = {
  //   backgroundColor: '#FA8072'
  // };
  // const style1 = {
  //   backgroundColor: '#CCFFCC'
  // };
  // return (
  //   <table>
  //     <thead>
  //       <tr>
  //         <th>Id</th>
  //         <th>Name</th>
  //         <th>Category</th>
  //         <th>Count</th>
  //         <th>Action</th>
  //       </tr>
  //     </thead>
  //     {Products.map(p => {
  //       return (
  //         <tbody>
  //           <tr style={p.category === 'Vehicle' ? style : style1}>
  //             <td>{p.id}</td>
  //             <td>{p.name}</td>
  //             <td>{p.category}</td>
  //             <td>
  //               <button onClick={() => decrease(p)}>-</button>
  //               {p.Count === 0 ? 'Zero' : p.Count}
  //               <button onClick={() => increase(p)}>+</button>
  //             </td>
  //             <td onClick={() => remove(p)}>Delete</td>
  //           </tr>
  //         </tbody>
  //       );
  //     })}
  //   </table>
  // );

  const WHATSAPP = 'Whatsapp';
  const FACEBOOK = 'FaceBook';
  const INSTAGRAM = 'Instagram';

  const [firstname, setfirstName] = useState('');
  const handleId = event => setfirstName(event.target.value);

  const [lastName, setlastName] = useState('');
  const handleCustomersName = event => setlastName(event.target.value);

  const [gender, setGen] = useState('');
  const handleGender = event => setGen(event.target.value);

  const [city, setCity] = useState('Lahore');
  const handleCity = event => setCity(event.target.value);

  const [comments, setcomments] = useState('');
  const handleComments = event => setcomments(event.target.value);

  const [checkBox, setcheckBox] = useState({
    [WHATSAPP]: false,
    [FACEBOOK]: false,
    [INSTAGRAM]: false
  });
  const handleCheckBox = event => {
    let id = event.target.id;
    let checked = event.target.checked;
    let dup = { ...checkBox, [id]: checked };
    setcheckBox(dup);
  };

  const [recordNum, setrecordNum] = useState();

  const initVal = () => {
    const LC = localStorage.getItem('customers');
    return LC ? JSON.parse(LC) : [];
  };
  const [customers, setcustomers] = useState(initVal);
  useEffect(
    () => localStorage.setItem('customers', JSON.stringify(customers)),
    [customers]
  );

  const handleSubmit = () => {
    if (firstname === '' || lastName === '' || gender === '') {
      alert('Enter data to submit');
    } else {
      let newarr = [...customers];

      let length = customers.length - 1;
      let newRecordNum = customers.length < 1 ? 0 : customers[length].recordNum;

      let newbobj = {
        recordNum: newRecordNum + 1,
        firstname,
        lastName,
        gender,
        city,
        comments,
        checkBox
      };

      newarr.push(newbobj);

      setcustomers(newarr);
      setfirstName('');
      setlastName('');
      setGen('');
      setCity('lahore');
      setrecordNum();
      setcomments('');
      setcheckBox({
        WHATSAPP: false,
        FACEBOOK: false,
        INSTAGRAM: false
      });
      console.log(newarr);
    }
  };

  const deleteRecord = item => {
    let newarr = customers.filter(customer => customer !== item);
    setcustomers(newarr);
    setrecordNum(0);
  };

  const updateForm = item => {
    setfirstName(item.firstname);
    setlastName(item.lastName);
    setGen(item.gender);
    setCity(item.city);
    setcomments(item.comments);
    setrecordNum(item.recordNum);
    setcheckBox(item.checkBox);
    setMode('Edit');
  };

  const handleUpdateObj = () => {
    if (firstname === '' || lastName === '' || gender === '') {
      alert('First Select Record  from the database to Update');
    } else {
      let newarr = [...customers];

      const index = newarr.findIndex(c => c.recordNum === recordNum);

      newarr[index].firstname = firstname;
      newarr[index].lastName = lastName;
      newarr[index].gender = gender;
      newarr[index].city = city;
      newarr[index].comments = comments;
      newarr[index].checkBox = checkBox;

      setcustomers(newarr);

      setfirstName('');
      setlastName('');
      setGen('');
      setCity('lahore');
      setrecordNum();
      setcomments('');
      setcheckBox({
        WHATSAPP: false,
        FACEBOOK: false,
        INSTAGRAM: false
      });
      setMode('Submit');
    }
  };

  //Conditional Rendering
  const [Mode, setMode] = useState('Submit');

  const Buttons = () =>
    Mode === 'Submit' ? (
      <input type="button" onClick={handleSubmit} value="Submit" />
    ) : (
      <input type="button" onClick={handleUpdateObj} value="Update" />
    );

  const styleGrey = {
    backgroundColor: 'grey'
  };
  const styleblue = {
    backgroundColor: 'blue'
  };

  return (
    <div>
      <img className="bg-image" alt="sparkling" src={logo}></img>
      <div className="content">
        <form>
          <h1 className="textdec">
            <u>F</u>
            <span className="o">o</span>
            <u>rm</u>
          </h1>
          <label style={{ color: 'orange' }}>
            <Icon icon={ic_person} size={28} />
          </label>
          <input
            type="text"
            value={firstname}
            onChange={handleId}
            placeholder="FirstName"
          />
          <br />
          <label style={{ color: 'orange' }}>
            <Icon icon={ic_person} size={28} className="usericon" />
          </label>
          <input
            type="text"
            value={lastName}
            onChange={handleCustomersName}
            placeholder="Last Name"
          />
          <br />
          <div
            style={{
              backgroundColor: 'orange',
              padding: '10px 0px',
              borderRadius: '8px',
              margin: '5px'
            }}
          >
            <u>Gender</u> <br />
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleGender}
              checked={gender === 'Male'}
            />
            Male
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={gender === 'Female'}
              onChange={handleGender}
            />
            Female
            <br />
            <u>Contact Method</u> <br />
            <label className="checkbox">
              <input
                id={WHATSAPP}
                type="checkbox"
                checked={checkBox[WHATSAPP]}
                onChange={handleCheckBox}
              />
              {WHATSAPP}
            </label>
            <label className="checkbox">
              <span className="check"></span>
              <input
                id={FACEBOOK}
                type="checkbox"
                checked={checkBox[FACEBOOK]}
                onChange={handleCheckBox}
              />
              {FACEBOOK}
            </label>
            <label className="checkbox">
              <input
                id={INSTAGRAM}
                type="checkbox"
                checked={checkBox[INSTAGRAM]}
                onChange={handleCheckBox}
              />
              {INSTAGRAM}
            </label>
          </div>
          <br />
          <label>
            City
            <select value={city} onChange={handleCity}>
              <option value="" disabled>
                Select The City
              </option>
              <option value="Islamabad">Islamabad</option>
              <option value="" disabled>
                Punjab Cities
              </option>
              <option value="Ahmed Nager Chatha">Ahmed Nager Chatha</option>
              <option value="Ahmadpur East">Ahmadpur East</option>
              <option value="Ali Khan Abad">Ali Khan Abad</option>
              <option value="Alipur">Alipur</option>
              <option value="Arifwala">Arifwala</option>
              <option value="Attock">Attock</option>
              <option value="Bhera">Bhera</option>
              <option value="Bhalwal">Bhalwal</option>
              <option value="Bahawalnagar">Bahawalnagar</option>
              <option value="Bahawalpur">Bahawalpur</option>
              <option value="Bhakkar">Bhakkar</option>
              <option value="Burewala">Burewala</option>
              <option value="Chillianwala">Chillianwala</option>
              <option value="Chakwal">Chakwal</option>
              <option value="Chichawatni">Chichawatni</option>
              <option value="Chiniot">Chiniot</option>
              <option value="Chishtian">Chishtian</option>
              <option value="Daska">Daska</option>
              <option value="Darya Khan">Darya Khan</option>
              <option value="Dera Ghazi Khan">Dera Ghazi Khan</option>
              <option value="Dhaular">Dhaular</option>
              <option value="Dina">Dina</option>
              <option value="Dinga">Dinga</option>
              <option value="Dipalpur">Dipalpur</option>
              <option value="Faisalabad">Faisalabad</option>
              <option value="Fateh Jhang">Fateh Jang</option>
              <option value="Ghakhar Mandi">Ghakhar Mandi</option>
              <option value="Gojra">Gojra</option>
              <option value="Gujranwala">Gujranwala</option>
              <option value="Gujrat">Gujrat</option>
              <option value="Gujar Khan">Gujar Khan</option>
              <option value="Hafizabad">Hafizabad</option>
              <option value="Haroonabad">Haroonabad</option>
              <option value="Hasilpur">Hasilpur</option>
              <option value="Haveli">Haveli</option>
              <option value="Lakha">Lakha</option>
              <option value="Jalalpur">Jalalpur</option>
              <option value="Jattan">Jattan</option>
              <option value="Jampur">Jampur</option>
              <option value="Jaranwala">Jaranwala</option>
              <option value="Jhang">Jhang</option>
              <option value="Jhelum">Jhelum</option>
              <option value="Kalabagh">Kalabagh</option>
              <option value="Karor Lal Esan">Karor Lal Esan</option>
              <option value="Kasur">Kasur</option>
              <option value="Kamalia">Kamalia</option>
              <option value="Kamoke">Kamoke</option>
              <option value="Khanewal">Khanewal</option>
              <option value="Khanpur">Khanpur</option>
              <option value="Kharian">Kharian</option>
              <option value="Khushab">Khushab</option>
              <option value="Kot Adu">Kot Adu</option>
              <option value="Jauharabad">Jauharabad</option>
              <option value="Lahore">Lahore</option>
              <option value="Lalamusa">Lalamusa</option>
              <option value="Layyah">Layyah</option>
              <option value="Liaquat Pur">Liaquat Pur</option>
              <option value="Lodhran">Lodhran</option>
              <option value="Malakwal">Malakwal</option>
              <option value="Mamoori">Mamoori</option>
              <option value="Mailsi">Mailsi</option>
              <option value="Mandi Bahauddin">Mandi Bahauddin</option>
              <option value="mian Channu">Mian Channu</option>
              <option value="Mianwali">Mianwali</option>
              <option value="Multan">Multan</option>
              <option value="Murree">Murree</option>
              <option value="Muridke">Muridke</option>
              <option value="Mianwali Bangla">Mianwali Bangla</option>
              <option value="Muzaffargarh">Muzaffargarh</option>
              <option value="Narowal">Narowal</option>
              <option value="Okara">Okara</option>
              <option value="Renala Khurd">Renala Khurd</option>
              <option value="Pakpattan">Pakpattan</option>
              <option value="Pattoki">Pattoki</option>
              <option value="Pir Mahal">Pir Mahal</option>
              <option value="Qaimpur">Qaimpur</option>
              <option value="Qila Didar Singh">Qila Didar Singh</option>
              <option value="Rabwah">Rabwah</option>
              <option value="Raiwind">Raiwind</option>
              <option value="Rajanpur">Rajanpur</option>
              <option value="Rahim Yar Khan">Rahim Yar Khan</option>
              <option value="Rawalpindi">Rawalpindi</option>
              <option value="Sadiqabad">Sadiqabad</option>
              <option value="Safdarabad">Safdarabad</option>
              <option value="Sahiwal">Sahiwal</option>
              <option value="Sangla Hill">Sangla Hill</option>
              <option value="Sarai Alamgir">Sarai Alamgir</option>
              <option value="Sargodha">Sargodha</option>
              <option value="Shakargarh">Shakargarh</option>
              <option value="Sheikhupura">Sheikhupura</option>
              <option value="Sialkot">Sialkot</option>
              <option value="Sohawa">Sohawa</option>
              <option value="Soianwala">Soianwala</option>
              <option value="Siranwali">Siranwali</option>
              <option value="Talagang">Talagang</option>
              <option value="Taxila">Taxila</option>
              <option value="Toba Tek  Singh">Toba Tek Singh</option>
              <option value="Vehari">Vehari</option>
              <option value="Wah Cantonment">Wah Cantonment</option>
              <option value="Wazirabad">Wazirabad</option>
              <option value="" disabled>
                Sindh Cities
              </option>
              <option value="Badin">Badin</option>
              <option value="Bhirkan">Bhirkan</option>
              <option value="Rajo Khanani">Rajo Khanani</option>
              <option value="Chak">Chak</option>
              <option value="Dadu">Dadu</option>
              <option value="Digri">Digri</option>
              <option value="Diplo">Diplo</option>
              <option value="Dokri">Dokri</option>
              <option value="Ghotki">Ghotki</option>
              <option value="Haala">Haala</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Islamkot">Islamkot</option>
              <option value="Jacobabad">Jacobabad</option>
              <option value="Jamshoro">Jamshoro</option>
              <option value="Jungshahi">Jungshahi</option>
              <option value="Kandhkot">Kandhkot</option>
              <option value="Kandiaro">Kandiaro</option>
              <option value="Karachi">Karachi</option>
              <option value="Kashmore">Kashmore</option>
              <option value="Keti Bandar">Keti Bandar</option>
              <option value="Khairpur">Khairpur</option>
              <option value="Kotri">Kotri</option>
              <option value="Larkana">Larkana</option>
              <option value="Matiari">Matiari</option>
              <option value="Mehar">Mehar</option>
              <option value="Mirpur Khas">Mirpur Khas</option>
              <option value="Mithani">Mithani</option>
              <option value="Mithi">Mithi</option>
              <option value="Mehrabpur">Mehrabpur</option>
              <option value="Moro">Moro</option>
              <option value="Nagarparkar">Nagarparkar</option>
              <option value="Naudero">Naudero</option>
              <option value="Naushahro Feroze">Naushahro Feroze</option>
              <option value="Naushara">Naushara</option>
              <option value="Nawabshah">Nawabshah</option>
              <option value="Nazimabad">Nazimabad</option>
              <option value="Qambar">Qambar</option>
              <option value="Qasimabad">Qasimabad</option>
              <option value="Ranipur">Ranipur</option>
              <option value="Ratodero">Ratodero</option>
              <option value="Rohri">Rohri</option>
              <option value="Sakrand">Sakrand</option>
              <option value="Sanghar">Sanghar</option>
              <option value="Shahbandar">Shahbandar</option>
              <option value="Shahdadkot">Shahdadkot</option>
              <option value="Shahdadpur">Shahdadpur</option>
              <option value="Shahpur Chakar">Shahpur Chakar</option>
              <option value="Shikarpaur">Shikarpaur</option>
              <option value="Sukkur">Sukkur</option>
              <option value="Tangwani">Tangwani</option>
              <option value="Tando Adam Khan">Tando Adam Khan</option>
              <option value="Tando Allahyar">Tando Allahyar</option>
              <option value="Tando Muhammad Khan">Tando Muhammad Khan</option>
              <option value="Thatta">Thatta</option>
              <option value="Umerkot">Umerkot</option>
              <option value="Warah">Warah</option>
              <option value="" disabled>
                Khyber Cities
              </option>
              <option value="Abbottabad">Abbottabad</option>
              <option value="Adezai">Adezai</option>
              <option value="Alpuri">Alpuri</option>
              <option value="Akora Khattak">Akora Khattak</option>
              <option value="Ayubia">Ayubia</option>
              <option value="Banda Daud Shah">Banda Daud Shah</option>
              <option value="Bannu">Bannu</option>
              <option value="Batkhela">Batkhela</option>
              <option value="Battagram">Battagram</option>
              <option value="Birote">Birote</option>
              <option value="Chakdara">Chakdara</option>
              <option value="Charsadda">Charsadda</option>
              <option value="Chitral">Chitral</option>
              <option value="Daggar">Daggar</option>
              <option value="Dargai">Dargai</option>
              <option value="Darya Khan">Darya Khan</option>
              <option value="dera Ismail Khan">Dera Ismail Khan</option>
              <option value="Doaba">Doaba</option>
              <option value="Dir">Dir</option>
              <option value="Drosh">Drosh</option>
              <option value="Hangu">Hangu</option>
              <option value="Haripur">Haripur</option>
              <option value="Karak">Karak</option>
              <option value="Kohat">Kohat</option>
              <option value="Kulachi">Kulachi</option>
              <option value="Lakki Marwat">Lakki Marwat</option>
              <option value="Latamber">Latamber</option>
              <option value="Madyan">Madyan</option>
              <option value="Mansehra">Mansehra</option>
              <option value="Mardan">Mardan</option>
              <option value="Mastuj">Mastuj</option>
              <option value="Mingora">Mingora</option>
              <option value="Nowshera">Nowshera</option>
              <option value="Paharpur">Paharpur</option>
              <option value="Pabbi">Pabbi</option>
              <option value="Peshawar">Peshawar</option>
              <option value="Saidu Sharif">Saidu Sharif</option>
              <option value="Shorkot">Shorkot</option>
              <option value="Shewa Adda">Shewa Adda</option>
              <option value="Swabi">Swabi</option>
              <option value="Swat">Swat</option>
              <option value="Tangi">Tangi</option>
              <option value="Tank">Tank</option>
              <option value="Thall">Thall</option>
              <option value="Timergara">Timergara</option>
              <option value="Tordher">Tordher</option>
              <option value="" disabled>
                Balochistan Cities
              </option>
              <option value="Awaran">Awaran</option>
              <option value="Barkhan">Barkhan</option>
              <option value="Chagai">Chagai</option>
              <option value="Dera Bugti">Dera Bugti</option>
              <option value="Gwadar">Gwadar</option>
              <option value="Harnai">Harnai</option>
              <option value="Jafarabad">Jafarabad</option>
              <option value="Jhal Magsi">Jhal Magsi</option>
              <option value="Kacchi">Kacchi</option>
              <option value="Kalat">Kalat</option>
              <option value="Kech">Kech</option>
              <option value="Kharan">Kharan</option>
              <option value="Khuzdar">Khuzdar</option>
              <option value="Killa Abdullah">Killa Abdullah</option>
              <option value="Killa Saifullah">Killa Saifullah</option>
              <option value="Kohlu">Kohlu</option>
              <option value="Lasbela">Lasbela</option>
              <option value="Lehri">Lehri</option>
              <option value="Loralai">Loralai</option>
              <option value="Mastung">Mastung</option>
              <option value="Musakhel">Musakhel</option>
              <option value="Nasirabad">Nasirabad</option>
              <option value="Nushki">Nushki</option>
              <option value="Panjgur">Panjgur</option>
              <option value="Pishin valley">Pishin Valley</option>
              <option value="Quetta">Quetta</option>
              <option value="Sherani">Sherani</option>
              <option value="Sibi">Sibi</option>
              <option value="Sohbatpur">Sohbatpur</option>
              <option value="Washuk">Washuk</option>
              <option value="Zhob">Zhob</option>
              <option value="Ziarat">Ziarat</option>
            </select>
          </label>
          <br />
          <label>Comments</label>
          <br />
          <textarea
            rows="3"
            cols="30"
            name="Comments"
            type="text"
            value={comments}
            onChange={handleComments}
          ></textarea>
          <br />
          <Buttons />
        </form>
        <table>
          <h1 className="t-b textdec">
            Table <span className="o">Data</span>base
          </h1>
          <thead>
            <tr>
              <th>Record Number</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>City</th>
              <th>Contact Method</th>
              <th>Comments</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          {customers.map((c, i) => {
            return (
              <tbody key={i}>
                <tr>
                  <td>{c.recordNum}</td>
                  <td>{c.firstname}</td>
                  <td>{c.lastName}</td>
                  <td style={c.gender === 'Male' ? styleGrey : styleblue}>
                    {c.gender}
                  </td>
                  <td>{c.city}</td>
                  <td>
                    <p>{c.checkBox[WHATSAPP] && WHATSAPP}</p>
                    <p>{c.checkBox[FACEBOOK] && FACEBOOK}</p>
                    <p>{c.checkBox[INSTAGRAM] && INSTAGRAM}</p>
                  </td>
                  <td>{c.comments}</td>
                  <td className="iconCenter">
                    {/* <button onClick={() => deleteRecord(c)}>Delete</button> */}
                    <Icon
                      icon={ic_delete}
                      size={32}
                      onClick={() => deleteRecord(c)}
                    />
                  </td>
                  <td className="iconCenter">
                    {/* <button onClick={() => updateForm(c)}>Update</button> */}
                    <Icon
                      icon={ic_mode_edit}
                      size={32}
                      onClick={() => updateForm(c)}
                    />
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default App;
