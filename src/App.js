import './App.css';

import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
