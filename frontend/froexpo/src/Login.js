import React from 'react'

const Login = () => {
  return (
    <div className="container">
    <h1 >Registration</h1>
    <form action="home.html">
        <table>
            <tr>
                <td className="label"><label for="Name">Name</label></td>
                <td><input type="text" id="name" className="input" required placeholder="Give Your Name"/></td>
            </tr>
            <tr>
                <td className="label"><label for="Email">Email</label></td>
                <td><input type="email" id="email" class="input" required placeholder="Give Your Email"/></td>
            </tr>
            <tr>
                <td className="label"><label for="Age">Age</label></td>
                <td><input type="number" id="age" class="input" placeholder="Give Your Age"/></td>
            </tr>
            <tr>
                <td><input type="submit" class="submit submit-1" value="Register"/></td>
            </tr>
        </table>
    </form>
</div>
  )
}

export default Login
