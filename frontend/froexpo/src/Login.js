import React from 'react'
import './Login.css';
import { Link,useNavigate} from 'react-router-dom'
const Login = () => {
    const nav=useNavigate()
    const HandleSubmit=(event)=>{
        event.preventDefault();
     
        nav('/home')
    }
  return (
    <center>
    <div className='parent'>
    <div class="lcontainer">
        <h1>Registration</h1>
        
        <form onSubmit={HandleSubmit}>
            <table>
                <tr>
                    <td class="llabel"><label for="Name">Name</label></td>
                    <td><input type="text" id="name" class="linput" name='name' required placeholder="Give Your Name" /></td>
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
                    <td><button type="submit" class="lsubmit lsubmit-1" >Register</button></td>
                </tr>
            </table>
        </form>
       
    </div>
    </div>
    </center>
  )
}

export default Login
