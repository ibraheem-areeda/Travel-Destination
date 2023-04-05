import { Routes,Route } from "react-router-dom";
import Home from './components/home/home'
import  Header  from "./components/header/header";
import Footer from './components/footer/footer';
import  TourDetails from "./components/TourDetails/TourDetails";
import  './components/TourDetails/TourDetails.css';
const toursdata = require ("./data/db.json")




function App() {

    
    return (
     <>
      <Header />
     <Routes>
        
        <Route path="/" element={<Home data={toursdata} />}></Route>
      
        <Route path="/city/:id" element={<TourDetails data={toursdata} />} /> 
        
     
        


        </Routes>
    <Footer />



     </>
    );
  }
  
  export default App;
  