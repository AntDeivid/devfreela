import { ReactComponent as LogoComponent } from '../../assets/images/Deivid Santos.svg'; // Importing SVG as a React Component
import './styles.css';

const Header = () => {
    return (
        <div className='topnav'>
            <LogoComponent />
        </div>
    )
}

export default Header;