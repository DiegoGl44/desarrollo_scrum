import "./NavBar.css";

const NavBar = (props) => {
  return (

<div>                                
    <body>
        <div id="header">
            <ul class="nav logo-nav-container">
                <li>OPCION 1</li>
                <li>OPCION 2
                    <ul>
                        <li>OPCION 2.1</li>
                        <li>OPCION 2.2</li>
                        <li>OPCION 2.3</li>
                    </ul>
                </li>
                <li>OPCION 3
                    <ul>
                        <li>OPCION 3.1</li>
                        <li>OPCION 3.2</li>
                        <li>OPCION 3.3</li>
                    </ul>
                </li>                                
                <li>OPCION 4
                </li>				
            </ul>
        </div>                     
    </body> 
</div>
  );
};

export default NavBar;
