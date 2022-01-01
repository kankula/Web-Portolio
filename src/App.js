import './App.css';
import Background from './components/Background';
import Navbar from './components/Navbar';
import About from './contents/About';
import Home from './contents/Home';
import Projects from './contents/Projects';
import Skills from './contents/Skills';

function App() {
  return (
    <>
    <div className="App">
      <Navbar /> 
      <Home />
      <Skills />
      {/* <Projects /> */}
      <About />      
    </div>
    <Background />
    </>
  );
}

export default App;
