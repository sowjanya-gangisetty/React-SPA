import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navigation from './components/Naviagtion'
import Footer from './components/Footer'
import CoffeeInfo from './components/CoffeeInfo'
import TeaInfo from './components/TeaInfo'
import HomePage from './components/HomePage'

function App() {
  
  const [page, setPage] = useState(null)

  return (
    <>
      <Header headerTitle = "Brewed Awakening " headerSubTitle= "Your daily dose of caffeine and benefits of tea "/>
      <Navigation updateFunction={setPage} currentPage={page}/>
      {page === "coffee" && <CoffeeInfo />}
      {page === "tea" &&  <TeaInfo/>}
      {!page && <HomePage navigateTo={setPage} />}
      <Footer/>
    </>

  )
}

export default App
