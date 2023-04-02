

function Tours(props) {
    let dc = props.data
    console.log(dc);
    console.log(dc[1])
    console.log(dc[1].name)
    return (
     <div class="allCards">
     {
        dc.map(ele=>{
                return(
            <figure class="tourcard" >
            <h1>{ele.name}</h1>
            
            <img src={ele.image} alt={ele.name} />
            </figure>
           )


        })
     }
    
     </div>
    );
  }
  
  export default Tours;