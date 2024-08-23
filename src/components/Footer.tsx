import { Link } from 'react-router-dom';
import'./custom.css'
import Logo from '/src/assets/Logo.png';

// interface L {
//     Link: String
// }

interface p {
    Name: string
    Link: string
    // ConditionLink: String
}
const NavItems = (props: p) => {
    // const UpdateClass = props.ConditionLink === props.Link ? 'active' : '' ;
    return(
        <>
            <ul className="nav-item " style={{paddingLeft: '0px'}}>
                <Link className={"nav-link custom-active " } to={'/' + props.Link}>{props.Name}</Link>
            </ul>
        </>
    );
}

const Names = [
    {name: 'Home', link: ''}, {name: 'About', link: 'about'}, {name: 'Works', link: 'work'}, {name: 'Contact', link: 'contact'}
]

const Footer = () => {
    return(
        <>
            <div className='row  p-3 custom-text-aling-center'>
                <div className='col custom-muted-text'>
                    <img className='p-3' src={Logo} style={{width: '200px'}}></img>
                    <div className='custom-horizontal-center' >
                        {Names.map(Nam => <NavItems Name={Nam.name} Link={Nam.link} />)}
                    </div>
                    <p >© All Rights Reserved by MDx95</p>
                </div>                
            </div>
        </>
    );
}
// btn-outline-success
export default Footer;