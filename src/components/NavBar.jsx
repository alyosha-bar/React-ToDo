import '../styles/nav.css'

function NavBar() {

    return (
        <nav>
            <ul className='navbar'>
                <li className='nav-links'><a href=""> PR Lounge </a></li>
                <li className='nav-links'><a href=""> About </a></li>
                <li className='nav-links'><a href=""> Clients </a></li>
                <li className='nav-button'><button href="" className='contact-btn'> Contact </button></li>
            </ul>
        </nav>
    )
}

export default NavBar;