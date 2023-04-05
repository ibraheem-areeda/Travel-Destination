import { Link  } from "react-router-dom";

function Header(props) {
    return (
        <>

            <header>
                <h1>Travel Destination</h1>
                <nav>
                <ul>
                    <li><Link to = "/" >HOME</Link></li>
                    <li><a href="FLIGHTS">FLIGHTS</a></li>
                    <li><a href="CAR_RENTALS">CAR RENTALS</a></li>
                    <li><a href="ATTRACTIONS">ATTRACTIONS</a></li>
                </ul>
            </nav>
        </header>

    </>
    
    
    )


}

export default Header;



