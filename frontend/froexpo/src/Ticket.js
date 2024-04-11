import React from 'react'
import './Ticket.css'
import { Link } from 'react-router-dom'
const Ticket = () => {
  return (
    <div className='tbody'>
      <div class="tcontainer">
        <table>
            <tr>
                <td><label for="Name" class="tlabel">Name</label></td>
                <td>
                    <p class="udetail">Harry potter</p>
                </td>
            </tr>
            <tr>
                <td><label for="email" class="tlabel">Email</label></td>
                <td>
                    <p class="udetail">Harry@gmail.com</p>
                </td>
            </tr>
            <tr>
                <td><label for="age" class="tlabel">Age</label></td>
                <td><p class="udetail">20</p></td>
            </tr>
        </table>
        <Link to='/home'>
            <center><button className='tsubmit'>Continue Your Journey</button></center>
        </Link>
    </div>
    </div>
  )
}

export default Ticket
