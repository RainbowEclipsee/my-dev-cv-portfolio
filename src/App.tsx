import './styles/main.css'

import {HashRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

import Home from './pages/Home'
import Career from './pages/Career'
import Projects from './pages/Projects'
import ProjectP from './pages/ProjectP'
import Contacts from './pages/Contacts'

import ScrollToTop from './utils/autoScrollToTop'

const App:React.FC = () => {

  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/career' element={<Career/>}/>
          <Route path='/project/:id'element={<ProjectP/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
