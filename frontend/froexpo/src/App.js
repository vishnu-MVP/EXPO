
import './App.css';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="maincon">
    <div className="container">
        <h1 id="ih1">Welcome To Our Expo</h1>
    </div>
    <div className="container">
        <Link to='/ticket'>
            <button type="submit" className="rainbow rainbow-1">Get Your Tickets!</button>
            </Link>
   
    </div>
</div>
  );
}

export default App;
