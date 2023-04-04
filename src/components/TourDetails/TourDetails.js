import { Link } from "react-router-dom";


function TourDetails(props) {
    let id = props.data

    return (
        <>

            {


                <Link to={`/city/rec6d6T3q5EBIdCfD`}>
                    <div>
                        <h1>Post Details</h1>
                        <p>ID: {id}</p>
                        {/* Display the rest of the post details */}
                    </div>

                </Link>




            }

        </>
    );
}

export default TourDetails;