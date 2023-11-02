import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import Details from './components/Details';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={ <Main/> } path='/home' /> {/* displays Main.js view on /home route */}
          <Route element={ <Details/> } path='/home/:id' /> {/* displays Details.js view on /home/:id route */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
