import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Main from './views/Main';
import Details from './components/Details';
import Update from './components/Update';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route element={<Main />} path='/home' /> {/* displays Main.js view on /home route */}
          <Route element={<Details />} path='/home/:id' /> {/* displays Details.js view on /home/:id route */}
          <Route element={<Update/>} path="/home/edit/:id"/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
