import { useState } from 'react'
import './App.css'
import Card from './components/card'
// import logo from "./logo.svg";

function App() {
  const tutorialData = [
    {
      title: 'Dedica moltes hores',
      description: 'Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores.\n Al principi sembla impossible, però notaràs una millora ràpidament.',
      bgColor: "#4da2a9",
      image: 'images/time_managment.svg'
    }, {
      title: "Programa projectes propis",
      description: "Més val 10 hores treballant en projectes propis, que 10 hores miranr tutorials.\n La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.",
      bgColor: "#d3d4d9",
      image: 'images/programming.svg'
    }, {
      title: "Procura descansar",
      description: "Descansar bé i desconectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat. Milloraràs la teva concentració i consolodidaràs el teu aprenentatge.",
      bgColor: "#ffd167",
      image: 'images/meditation.svg'
    }
  ]

  const [step, setStep] = useState(0);
  const currentCardData = tutorialData[step];
  const nextStep = () => {

    if (step < tutorialData.length - 1) {
      setStep(step + 1);
    }
  }
  // const imagen =require(`../assets/${imagen}.png`).default;
  return (
    <>
      <Card currentCardData={currentCardData} nextStep={nextStep}></Card>
    </>
  )
}

export default App
