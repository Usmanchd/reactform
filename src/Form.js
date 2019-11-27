import React, { useState, useEffect } from 'react';
import { Icon } from 'react-icons-kit';
import { ic_person } from 'react-icons-kit/md/ic_person';
import { Link } from 'react-router-dom';

export default function Form(props) {
  const [user, setuser] = useState({
    firstname: '',
    lastName: '',
    gender: '',
    city: '',
    comments: '',
    checkbox: {
      WHATSAPP: false,
      FACEBOOK: false,
      INSTAGRAM: false
    }
  });

  const handleChange = e => {
    let newcheckbox = e.target.type === 'checkbox' && {
      ...user.checkbox,
      [e.target.name]: e.target.checked
    };
    let newuser =
      e.target.type === 'checkbox'
        ? { ...user, checkbox: { ...newcheckbox } }
        : { ...user, [e.target.name]: e.target.value };
    setuser(newuser);
    console.log(user);
  };

  useEffect(() => {
    resetForm();
    props.userToUpdate && setuser(props.userToUpdate);
  }, [props.userToUpdate]);

  const validateUser = e => {
    if (user.firstname === '' || user.lastName === '' || user.gender === '') {
      alert('Enter data to submit');
    } else {
      e.target.value === 'Submit'
        ? props.addUser(user)
        : props.updateUser(user);
      resetForm();
    }
  };

  const resetForm = () => {
    setuser({
      firstname: '',
      lastName: '',
      gender: '',
      city: '',
      comments: '',
      checkbox: {
        WHATSAPP: false,
        FACEBOOK: false,
        INSTAGRAM: false
      }
    });
  };

  const Buttons = () =>
    props.Mode === 'Submit' ? (
      <input type="button" onClick={validateUser} value="Submit" />
    ) : (
      <Link to="/form/adduser">
        <input type="button" onClick={validateUser} value="Update" />
      </Link>
    );
  return (
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
        name="firstname"
        value={user.firstname}
        onChange={handleChange}
        placeholder="FirstName"
      />
      <br />
      <label style={{ color: 'orange' }}>
        <Icon icon={ic_person} size={28} className="usericon" />
      </label>
      <input
        type="text"
        name="lastName"
        value={user.lastName}
        onChange={handleChange}
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
          onChange={handleChange}
          checked={user.gender === 'Male'}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={user.gender === 'Female'}
          onChange={handleChange}
        />
        Female
        <br />
        <u>Contact Method</u> <br />
        <label className="checkbox">
          <input
            name="WHATSAPP"
            type="checkbox"
            checked={user.checkbox.WHATSAPP}
            onChange={handleChange}
          />
          Whatsapp
        </label>
        <label className="checkbox">
          <span className="check"></span>
          <input
            name="FACEBOOK"
            type="checkbox"
            checked={user.checkbox.FACEBOOK}
            onChange={handleChange}
          />
          Facebook
        </label>
        <label className="checkbox">
          <input
            name="INSTAGRAM"
            type="checkbox"
            checked={user.checkbox.INSTAGRAM}
            onChange={handleChange}
          />
          Instagram
        </label>
      </div>
      <br />
      <label>
        City
        <select name="city" value={user.city} onChange={handleChange}>
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
        name="comments"
        value={user.comments}
        onChange={handleChange}
      ></textarea>
      <br />
      <Buttons />
    </form>
  );
}
