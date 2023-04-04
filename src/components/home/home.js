
import Header from '../header/header';
import '../header/header.css';
import Footer from '../footer/footer';
import  '../footer/footer.css';
import Tours from '../tours/tours';
import  '../tours/tours.css';
function Home(props) {
    return (
     <>
     
     <Tours data={props.data} />
     
   
     </>
    );
  }
  
  export default Home;
  