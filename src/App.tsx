import Navbar from "./components/Navbar"
import Homepage from "./components/Homepage"
import HelmetAsync from "./components/Helmet"

function App() {


  return (
    <div className="App">
      <HelmetAsync />
      <Navbar />
      <Homepage />
    </div>
  )
}

export default App
