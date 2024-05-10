import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/pollifylogo.jpg'
import './App.css';
import NavComponent from './Components/Nav';
import ServiceComponent from './Components/Service';
import { BrowserRouter,
	Routes,
	Route
} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Service from './Pages/Services';
import Signup from './Pages/Signup';
import PollForm from './Pages/PollForm';

function App() {
  return (
    <BrowserRouter>
	  <Routes>
	  	<Route path='/' element={<Home />} />
	  	<Route path='/about' element={<About />} />
		<Route path='/login' element={<Login />} />
		<Route path='/service' element={<Service />} />
		<Route path='/signup' element={<Signup />} />
		<Route path='/poll-form' element={<PollForm />} />
	  </Routes>
    </BrowserRouter>
  )
}

export default App
