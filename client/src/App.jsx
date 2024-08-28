import React from 'react';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Project from './pages/Project';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Home'  element={<Home />}/>
        <Route path='/About'  element={<About />}/>
        <Route path='/Dashboard'  element={<Dashboard />}/>
        <Route path='/Project'  element={<Project />}/>
        <Route path='/SignIn'  element={<SignIn />}/>
        <Route path='/SignUp'  element={<SignUp />}/>
      </Routes>
    </BrowserRouter>
  )
}
