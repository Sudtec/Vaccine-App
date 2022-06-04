import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import { Navbar } from './components/Navbar';
import { Intro } from './sections/intro';
import { Why } from './sections/why';
import { How } from './sections/How'
const App = () => {
  return (
    <div className='higher_order-container'>
      <Navbar />
      <Intro />
      <Why />
      <How />
    </div>
  )
}

export default App