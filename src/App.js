import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import { Navbar } from './components/Navbar';
import { Intro } from './sections/intro';
import { Why } from './sections/why';
import { How } from './sections/How';
import { Reminder } from './sections/Reminder';
const App = () => {
  return (
    <div className='higher_order-container'>
      <Navbar />
      <Intro />
      <Why />
      <How />
      <Reminder />
    </div>
  )
}

export default App