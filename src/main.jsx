import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/Index'
import Privacy from './pages/Privacy'
import { useState } from 'react'
// import axios from 'axios'

import {BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
       <Routes>
          <Route>
          <Route path='/' Component={Index}/>

          <Route path='/privacy' Component={Privacy}/>
          


          
          </Route>

       </Routes>
    
    </BrowserRouter>
  
)
