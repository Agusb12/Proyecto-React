import './NavBar.css';


 
function  NavBar ({li1,li2,li3}) {
  
    return(
        <nav className="div-nav">
                <ul>
            <h1>PHONE FIXERS</h1>
                    <li>{li1}</li>
                    <li>{li2}</li>
                    <li>{li3}</li>                
            </ul>
        </nav>
    )
}

export default NavBar;