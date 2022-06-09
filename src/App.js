import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import { Navbar } from './components/Navbar';
import { Intro } from './sections/intro';
import { Why } from './sections/why';
import { How } from './sections/How';
import { Reminder } from './sections/Reminder';
import { Brands } from './sections/Brands';
import { Features } from './sections/features';
import { DoctorsOnCall } from './sections/doctorsOnCall'
const App = () => {
  return (
    <div className='higher_order-container'>
      <Navbar />
      <Intro />
      <Why />
      <How />
      <Reminder />
      <Brands />
      <Features />
      <DoctorsOnCall />
    </div>
  )
}

export default App