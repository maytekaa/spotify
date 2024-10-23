import { useEffect, useState } from "react"
import Container from "./components/Container"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import {Outlet} from 'react-router-dom'

function App() {
  
 
  return (
    <>
    <Header/>
    <Container>
      <Sidebar/>
      <Outlet></Outlet>
    </Container>
    </>

  )
}

export default App