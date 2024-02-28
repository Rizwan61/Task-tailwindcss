import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import TextSection1 from './components/TextSection1.jsx'
import Footer from './components/footer/Footer.jsx'
function App() {

  return (
    <>
     <div className="bg-[url('public/assets/bgImage.png')] bg-cover h-[700px]">

     <Navbar/>
     <TextSection1/>
     </div>
     <div>
      <Footer/>
     </div>
 
  
     
      
    </>
  )
}

export default App
