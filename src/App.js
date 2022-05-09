// import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import Intro from './components/Intro';
import Navigation from './components/Navigation';
import "./style/landingPage.css"
import Trending from './components/Trending';
import Superhero from './components/Superhero';

function App() {
  return (
    <div className="App">
      {/* intro */}
      <div className='myBg'>
      <Navigation/>
      <Intro/>
      </div>
      {/* end intro */}
      <div className='trending'>
        <Trending/>
      </div>

      <div className='superhero'>
        <Superhero/>
      </div>
    </div>
  );
}

export default App;
