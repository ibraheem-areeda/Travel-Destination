import { Routes,Route } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Home from './components/home/home'
import  Header  from "./components/header/header";
import Footer from './components/footer/footer';
import  TourDetails from "./components/tours/tour/tour";
const toursdata = require ("./data/db.json")





function App() {

    const  {id} = useParams();
  

    return (
     <>
      <Header />
     <Routes>
        <Route path="/" element={<Home data={toursdata} />} />
        <Route path="/city/rec6d6T3q5EBIdCfD" element={<TourDetails data={id} />} />
        {/* <Route path = {"/city/:id"} > <Tour/> </Route> */}
     
        


    </Routes>
    <Footer />



     </>
    );
  }
  
  export default App;
  