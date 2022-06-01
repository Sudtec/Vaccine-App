import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css'
import {Intro} from './sections/intro';
import {Navbar} from './components/Navbar';

const App = () => {
  return (
    <div className='higher_order-container'>
        <Navbar />
        <Intro />
    </div>
  )
}

export default App