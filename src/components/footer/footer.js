import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter , faYoutube , faSnapchat} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
function Footer (props) {
    return(
    <>
    
    <footer>
    
        <nav>
        <h3><a href="contact_us">Contact us</a></h3>
          <ul>
        <li><a href="facebook"><FontAwesomeIcon icon={faFacebookF} class={"svg"} style={{color: "#e76f51",}}/></a></li>
        <li><a href="instagram"><FontAwesomeIcon icon={faInstagram}  class={"svg"}  style={{color: "#e76f51",}} /></a></li>
        <li><a href="twitter"><FontAwesomeIcon icon={faTwitter}  class={"svg"}  style={{color: "#e76f51",}} /></a></li>
        <li><a href="youtube"><FontAwesomeIcon icon={faYoutube} class={"svg"}  style={{color: "#e76f51",}}  /></a></li>
        <li><a href="snap_chat"><FontAwesomeIcon icon={faSnapchat} class={"svg"}  style={{color: "#e76f51",}}  /></a></li>
         </ul>
         <h5>Copyright  All rights reserved, developed by ibraheem areeda.</h5>
    </nav>
     
                                            
    </footer>
    </>
    )
}



export default Footer;

