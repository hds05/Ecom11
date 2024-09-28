import logo from './logo.svg';
import './App.css';
import Headphn from './headphn';
import Headr from './headr';
import Footr from './footr';
import Test from './eardop';
import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  const data = ['amit', "anil"];
  return (
    <div className="App">
      <BrowserRouter>
        < Headr />
        <Routes>
          <Route path="/" element={<Headphn />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          <Route path="/about" element={<About />} />

        </Routes>

        < Footr />

      </BrowserRouter>
    </div>
  );
}

export default App;


{/* <Fragment>
        < Headr />
        < Headphn data={"amit"} />
        < Headphn data={{ name: "amit", add: "jaipur" }} />
        < Test data={data} />
        < Headphn data={"lalit"} />
        < Headphn data={"sohit"} />
        < Headphn data={"mohit"} />

        < Footr />
      </Fragment> */}
