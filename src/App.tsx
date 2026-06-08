import {Routes, Route} from 'react-router-dom'
import NotFound from './pages/notfound'
import Services from './pages/services'
import Header from './components/header'
import Project from './pages/project'
import About from './pages/about'
import Contact from './pages/contact'
import Footer from './components/footer'
function App() {
  

  return (
    <>
      <Header />
      <Services />
      <Project />
      <About />
      <Contact />
      <Footer />
      <Routes>
      
      </Routes>
    </>
  )
}

export default App
