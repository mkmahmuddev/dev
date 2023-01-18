import logo from './logo.svg';
import './App.css';
import Router from './Routes/Router/Router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faX, faBars, faCircleDot, faArrowsToDot, faBriefcase, faSchool } from '@fortawesome/free-solid-svg-icons';
library.add(faX, faBars, faCircleDot, faArrowsToDot, faBriefcase, faSchool)

function App() {
  return (
    <div className="App min-w-[360px] max-w-[1440px] m-auto px-2 md:px-5">
      <Router>
      </Router>
    </div>
  );
}

export default App;
