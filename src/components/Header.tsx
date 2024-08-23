import { Link } from 'react-router-dom';
import'./custom.css'
import Logo from '/src/assets/Logo.png';
import { useState} from 'react';
// import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import cross from '/src/assets/cross.png'
interface L {
    Link: String
}

interface p {
    Name: String
    Link: String
    ConditionLink: String
}
const NavItems = (props: p) => {
    const UpdateClass = props.ConditionLink === props.Link ? 'active' : '' ;
    return(
        <>
            <li className="nav-item">
                <Link className={"nav-link custom-active " + UpdateClass} to={'/' + props.Link}>{props.Name}</Link>
            </li>
        </>
    );
}


const Names = [
    {name: 'Home', link: ''}, {name: 'About', link: 'about'}, {name: 'Works', link: 'work'}, {name: 'Contact', link: 'contact'}
]

const Header = (props: L) => {

    const [MobileOpen, setMobileOpen] = useState<boolean>(false);

    const toggelMobile = () => {
        setMobileOpen(!MobileOpen);
    }
    
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark custom-background2 p-3">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" onClick={toggelMobile} >
                        {
                            MobileOpen === false ? (
                                <span className="navbar-toggler-icon"></span>
                            ) : (
                                <img src={cross}></img>
                            )
                        }
                        {
                            MobileOpen === true ? (
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                                    {Names.map(Nam => <NavItems Name={Nam.name} Link={Nam.link} ConditionLink={props.Link}/>)}
                                </ul>
                            ) : ''
                        }
                    </button>

                    <a href="/"><img className="navbar-brand" src={Logo} style={{width: '70px'}}></img></a>
                    <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                        {/* <li> */}
            {Names.map(Nam => <NavItems Name={Nam.name} Link={Nam.link} ConditionLink={props.Link}/>)}
                <li></li>
                {/* </li> */}
                        </ul>
                        <form className="d-flex">
                            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                            <Link className="btn btn-light" to='/contact' >Let's Talk</Link>
                        </form>
                    </div>
                </div>
            </nav>

            
        </>
    );
}
// btn-outline-success
export default Header;