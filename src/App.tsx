import Header from './components/header'
import {Routes, Route} from 'react-router-dom'
import NotFound from './pages/notfound'
function App() {
  

  return (
    <>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
