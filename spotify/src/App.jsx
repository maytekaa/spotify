
import Sidebar from "./Components/Sidebar"
import Header from "./Components/Header"
import Container from "./Components/Container"
import CardSidebar from "./Components/CardSidebar"
import ConteudoPrincipal from "./Components/ConteudoPrincipal"
import { useEffect, useState } from "react"

function App() {

  const [artistas, setArtistas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() =>{
    fetch('http://localhost:3000/artistas')
      .then(res => res.json())
      .then(data => setArtistas(data))
      .catch(err => console.log(err))
  })

  return (

    <>
      <Header />
      <Container>
        <Sidebar>
          <CardSidebar />
          <CardSidebar />
          <CardSidebar />
        </Sidebar>
        <ConteudoPrincipal>

          {
            artistas.map( artista => {
              <div className="bg-red-500 w-28 h-28 flex flex-col justify-around items-center">
                <p>{artista.name}</p>
                <div className="bg-green-400 w-3/4 h-7"></div>
                <div className="bg-green-400 w-3/4 h-7"></div>
              </div>
            })
          }

        

        </ConteudoPrincipal>
      </Container>
    </>
  )
}

export default App
