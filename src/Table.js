import React from 'react';
import { Icon } from 'react-icons-kit';
import { ic_delete } from 'react-icons-kit/md/ic_delete';
import { ic_mode_edit } from 'react-icons-kit/md/ic_mode_edit';
import { Link } from 'react-router-dom';

export default function Table(props) {
  return (
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
      {props.users.map((c, i) => {
        console.log(props.users);
        return (
          <tbody key={i}>
            <tr>
              <td>{c.recordNum}</td>
              <td>{c.firstname}</td>
              <td>{c.lastName}</td>
              <td>{c.gender}</td>
              <td>{c.city}</td>
              <td>
                <p>{c.checkbox.WHATSAPP && 'WHATSAPP'}</p>
                <p>{c.checkbox.FACEBOOK && 'FACEBOOK'}</p>
                <p>{c.checkbox.INSTAGRAM && 'INSTAGRAM'}</p>
              </td>
              <td>{c.comments}</td>
              <td className="iconCenter">
                {/* <button onClick={() => deleteRecord(c)}>Delete</button> */}

                <Icon
                  icon={ic_delete}
                  size={32}
                  onClick={() => props.removeUser(c)}
                />
              </td>
              <td className="iconCenter">
                {/* <button onClick={() => updateForm(c)}>Update</button> */}
                <Link to={`/form/edituser/${c.recordNum}`}>
                  <Icon
                    style={{ color: 'orange' }}
                    icon={ic_mode_edit}
                    size={32}
                    onClick={() => props.updateUserData(c)}
                  />
                </Link>
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}
