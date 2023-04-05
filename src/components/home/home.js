
import Header from '../header/header';
import '../header/header.css';
import Footer from '../footer/footer';
import  '../footer/footer.css';
import Tours from '../tours/tours';
import  '../tours/tours.css';
function Home(props) {
    return (
     <>
     <Header />
     <Tours data={props.data} />
     <Footer />
   
     </>
    );
  }
  
  export default Home;
  