import { Link } from 'react-router-dom';

const NavComponent = () => {
    return (
        <>
            <ul> 
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/about'>ABOUT US</Link></li>
                <li><Link to='/service'>SERVICE</Link></li>
                <li><Link to='/SignUp'>SIGNUP</Link></li>
                <li><Link to='/login'>LOGIN</Link></li>
            </ul>
        </>
    );
};

export default NavComponent;
