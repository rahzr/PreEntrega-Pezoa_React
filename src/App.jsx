import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavbarCustom from './components/NavbarCustom/NavbarCustom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavbarCustom/>
      <h1 className='f-playfair text-center mt-3 fw-bold'>BaseApp.js</h1>
      <hr />
      <h5 className='text-center'>
        Pre-Entrega
        <div className='f-playfair' style={{ fontSize: '80px' }}>n°1</div>
        Kevin Pezoa G.
      </h5>
    </>
  )
}

export default App
