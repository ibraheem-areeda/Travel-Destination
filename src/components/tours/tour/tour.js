import { Link } from "react-router-dom";


function Tour(props) {
    let dcarr = props.data
    // console.log(dcarr);
    // console.log(dcarr[1])
    // console.log(dcarr[1].name)
    return (
        <>

            {
                dcarr.map(ele => {
                    return (

                        <Link to={`/city/${ele.id}`}>
                            <figure key={ele.id} class="tourcard" >
                                <h1 style={{textDecoration: "none"}}>{ele.name}</h1>

                                <img src={ele.image} alt={ele.name} />
                            </figure>
                        </Link>
                    )


                })
            }

        </>
    );
}

export default Tour;