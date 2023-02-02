import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
function  NavBar ({li1,li2,li3}) {
  
    return(
        <nav className="div-nav">
                <ul>
                <CartWidget/>
                    <div className="h1-div">   
                        <h1>FAST FOOD</h1>
                    </div>
                    <Link to = {"/Contact"}>
                        <li>{li1}</li>    
                    </Link>
                        <li><a>{li2}</a></li>
                        <li><a>{li3}</a></li>                
            </ul>
        </nav>
    )
}

export default NavBar;