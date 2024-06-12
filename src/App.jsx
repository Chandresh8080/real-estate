import Header from "./components/Header/Header";
import Hero from "./components/hero/Hero";
import './App.css'
import Companies from "./components/companies/companies";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/value/Value";
import Contact from "./components/contact/contact";
import GetStarted from "./components/Getstarted/Getstarted";
import Footer from "./components/footer/footer";




function App() {
  return (
    <div className="App">

      <div>
        <div className="White-gradient"/>
      <Header/>
      <Hero/>
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>

    </div>
  );
}

export default App;
