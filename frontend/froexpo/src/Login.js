import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <center>
    <div className='parent'>
    <div class="lcontainer">
        <h1>Registration</h1>
        <Link to='/home'>
        <form action="home.html">
            <table>
                <tr>
                    <td class="llabel"><label for="Name">Name</label></td>
                    <td><input type="text" id="name" class="linput" required placeholder="Give Your Name"/></td>
                </tr>
                <tr>
                    <td class="llabel"><label for="Email">Email</label></td>
                    <td><input type="email" id="email" class="linput" required placeholder="Give Your Email"/></td>
                </tr>
                <tr>
                    <td class="llabel"><label for="Age">Age</label></td>
                    <td><input type="number" id="age" class="linput" placeholder="Give Your Age"/></td>
                </tr>
                <tr>
                    <td><button type="submit" class="lsubmit lsubmit-1" value="Register"/></td>
                </tr>
            </table>
        </form>
        </Link>
    </div>
    </div>
    </center>
  )
}

export default Login
