import Tour from "./tour/tour";

function Tours(props) {

    return (
     <div class="allCards">
         <Tour data={props.data}/>
         
     </div>
    );
  }
  
  export default Tours;