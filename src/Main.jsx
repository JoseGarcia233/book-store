import './css/App.css';
import Routess from './routes/routes.jsx'
import Navbar from './components/Navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
function Main() {
  return (
    <div className="App">
      <span>
        <Navbar />

      </span>
      <span>

        <Routess />
      </span>
    </div>
  );
}

export default Main;
