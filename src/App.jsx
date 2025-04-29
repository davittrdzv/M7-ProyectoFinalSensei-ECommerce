import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import RoutesIndex from './routes/RoutesIndex'
import './styles/styles.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
