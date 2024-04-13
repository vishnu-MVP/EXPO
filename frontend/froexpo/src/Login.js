import React from 'react';
import './Login.css';
import click from './sounds/click.wav';
import sclick from './sounds/ticket.wav';

import { useSound } from 'use-sound';
import { useNavigate } from 'react-router-dom';

export const useButtonClickSound = () => {
  const [playClick] = useSound(click);
  return playClick;
};

export const useSubmitClickSound = () => {
  const [splayClick] = useSound(sclick);
  return splayClick;
};

const Login = () => {
  const playClick = useButtonClickSound();
  const splayClick = useSubmitClickSound();

  const handleButtonClick = () => {
    playClick();
  };

  const nav = useNavigate();

  const HandleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const response = await fetch('http://localhost:3000/backend/server.php', {
        method: 'POST',
        body: formData,
        mode:'no-cors'
      });

      if (response.ok) {
        console.log('Form data submitted successfully');
        nav('/home');
        splayClick();
      } else {
        console.error('Error submitting form data');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <center>
      <div className='parent'>
        <div class="lcontainer">
          <h1>Registration</h1>
          <form onSubmit={HandleSubmit} method='post'>
            <table>
              <tr>
                <td class="llabel"><label for="Name">Name</label></td>
                <td><input type="text" id="name" class="linput" name='name' required placeholder="Give Your Name" /></td>
              </tr>
              <tr>
                <td class="llabel"><label for="Email">Email</label></td>
                <td><input type="email" id="email" class="linput"  name="email" required placeholder="Give Your Email" /></td>
              </tr>
              <tr>
                <td class="llabel"><label for="Age">Age</label></td>
                <td><input type="number" id="age" class="linput" name="age" placeholder="Give Your Age" /></td>
              </tr>
              <tr>
                <td><button type="submit" onClick={handleButtonClick} class="lsubmit lsubmit-1" >Register</button></td>
              </tr>
            </table>
          </form>
        </div>
      </div>
    </center>
  );
};

export default Login;
