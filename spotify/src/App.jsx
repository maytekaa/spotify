
import Sidebar from "./Components/Sidebar"
import Header from "./Components/Header"
import Container from "./Components/Container"
import CardSidebar from "./Components/CardSidebar"
import ConteudoPrincipal from "./Components/ConteudoPrincipal"

function App() {

  return (

    <>
      <Header />
      <Container>
        <Sidebar>
          <CardSidebar />
          <CardSidebar />
          <CardSidebar />
        </Sidebar>
        <ConteudoPrincipal />
      </Container>
    </>
  )
}

export default App
