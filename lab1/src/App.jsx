import './App.css';
import ironhackLogo from "./assets/ironhack-logo-xs.png";
import menuIcon from "./assets/menu-top-xs.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";


function App() {
  return (
    <div className="App">
      <div className='header'>
        <img className='ilogo' src={ironhackLogo} alt="Ironhack Logo" />
        <img className='menulogo' src={menuIcon} alt="Menu" />
        <h1 className='hello'>Say hello to<br /> ReactJS</h1>
        <p className="desc">You will learn how to use<br /> the most popular frontend library,<br /> and become a super Ninja developer.</p>
        <button className='awesome'>Awesome!</button>
      </div>
      <div className='list'>
        <div className='icon1'>
          <img src={icon1} alt="dec" />
          <h2 className='title'>Declarative</h2>
          <p className='text'>React makes it<br /> painless to create<br /> interactive UIs.</p>
        </div>
        <div className='icon2'>
          <img src={icon2} alt="components" />
          <h2 className='title'>Components</h2>
          <p className='text'>Build encapsulated<br /> components that<br /> manage their state.</p>
        </div>
        <div className='icon3'>
          <img src={icon3} alt="single" />
          <h2 className='title'>Single-Way</h2>
          <p className='text'>A set of immutable<br /> values are passed to<br /> the component's.</p>
        </div>
        <div className='icon4'>
          <img src={icon4} alt="jsx" />
          <h2 className='title'>JSX</h2>
          <p className='text'>Statically-typed,<br /> designed to run on<br /> modern browsers</p>
        </div>
      </div>
    </div>
  );
}

export default App;