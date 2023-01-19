import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
function  NavBar ({li1,li2,li3}) {
  
    return(
        <nav className="div-nav">
                <ul>
                <CartWidget/>
                    <div className="h1-div">   
                        <h1>PHONE FIXERS</h1>
                    </div>   
                <li>{li1}</li>
                <li>{li2}</li>
                <li>{li3}</li>                
            </ul>
        </nav>
    )
}

export default NavBar;