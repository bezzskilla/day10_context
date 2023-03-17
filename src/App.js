import React, { useState, useContext } from 'react';
import './App.css';

const FirstContext = React.createContext()
const SecondContext = React.createContext()

const CounterComponent = () => {
  const { conter, inctrement, dicrement } = useContext(FirstContext)

  return (
    <div>
      <p>{conter}</p>
      <button onClick={inctrement}>+</button>
      <button onClick={dicrement}>-</button>
    </div>
  )
}

const Header = () => {
  return (
    <div>
      <header>Хедер</header>
      <div>
        <CounterComponent />
      </div>
    </div>
  )
}

const Footer = () => {
  const { exampleCounter, exampleString } = useContext(SecondContext)

  return (
    <div>
      <p>{exampleCounter}</p>
      <p>{exampleString}</p>
      <footer>Футер</footer>
    </div>
  )
}

function App() {
  const [conter, setCounter] = useState(0)

  const inctrement = () => {
    setCounter(prev => prev + 1)
  }

  const dicrement = () => {
    setCounter(prev => prev - 1)
  }

  const exampleCounter = 29;
  const exampleString = 'Что угодно могу положить'

  const valueForContext1 = {
    inctrement,
    dicrement: dicrement,
    conter: conter,
  }

  return (
    <div className="App">
      <FirstContext.Provider value={valueForContext1}>
        <Header />
      </FirstContext.Provider>

      <SecondContext.Provider
        value={{ exampleCounter, exampleString }}
      >
        <Footer />
      </SecondContext.Provider>
    </div>
  );
}

export default App;
