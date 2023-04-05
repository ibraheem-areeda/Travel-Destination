import { useParams } from "react-router-dom";
import { useState } from 'react';


function TourDetails(props) {

    const [showFullDes , setshowFullDes] = useState(false);
    
    const {id} = useParams();
    const arr = props.data;
//    console.log(arr);

let tourarr = arr.filter(ele => ele.id === id);

 const tourObj = tourarr[0];


 function showFullDesHandler(){
    

    setshowFullDes(!showFullDes) 
    
    
    

}



 console.log(tourObj);
      
        return (
            <>

            

            <div class="devinfo">
            <figure class="tourDetails" >
            <h1 style={{textDecoration: "none"}}>{tourObj.name}</h1>

            <img src={tourObj.image} alt={tourObj.name} />
            </figure>
            <section>
                <p>{showFullDes? tourObj.info :tourObj.info.substring(0, 120) }</p>
                <button   onClick={showFullDesHandler}>{showFullDes? "see less" : "see more"}</button>
                <h3>price: {tourObj.price}</h3>
            </section>
            </div>
            
            
            </>
            )
            
        }






        







































export default TourDetails;
