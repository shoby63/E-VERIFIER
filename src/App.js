import logo from './logo.svg';
import './App.css';
import NavbarC from './Components/Navbar/NavbarC';
import SectionComponet from './Components/Section/SectionComponet';
import { createTheme,Spacer } from '@nextui-org/react';
import Features from './Components/FeaturesSection/Features';
import Footer from './Components/Footer/Footer';
import Result from './Components/ResultSection/Result';
function App() {
  
  return (
    <div> 
    <NavbarC/>
    <Spacer y={0.5} />
    <SectionComponet/>
    <Result/>
    <Features/>
    <Footer/>
    </div>
     );
}

export default App;
