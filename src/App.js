import Home from './components/home/home'
const toursdata = require ("./data/db.json")




function App() {


    return (
     <>
     
     
     <Home data={toursdata} />



     </>
    );
  }
  
  export default App;
  