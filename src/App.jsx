import { useState } from 'react'
import './App.css'
import ListToDos from './components/ListToDos'
import 'bootstrap/dist/css/bootstrap.min.css';
import Receipes from './components/Receipes';

function App() {
  return (
    <>
      <Receipes />
      <ListToDos />
    </>
  )
}

export default App