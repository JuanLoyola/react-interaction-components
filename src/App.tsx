import { useState } from 'react'
import { SizeSelector } from './components/SizeSelector'
import './App.css'

function App() {
  // auxiliar
  const [currentSize, setCurrentSize] = useState('-')

  return (
    <div className="App App-header">
      <div className="card">
        <h1>Talla seleccionada:</h1>
        <h1>{ currentSize }</h1>
      </div>
      <SizeSelector 
        selectedSize={ currentSize }
        onSizeChange={ setCurrentSize }
        // onSizeChange tiene un unico value, puede pasarse directamente
      />
    </div>
  )
}

export default App
