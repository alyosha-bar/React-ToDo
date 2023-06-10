import '../styles/nav.css'

function NavBar() {

    return (
        <nav>
            <ul className='navbar'>
                <li className='nav-links'><a href=""> Home </a></li>
                <li className='nav-links'><a href=""> About </a></li>
                <li className='nav-links'><a href=""> Clients </a></li>
                <li className='nav-links'><a href=""> Contact </a></li>
            </ul>
        </nav>
    )

}

export default NavBar;