import './assets/header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {

    const {title} = props;

  return (
    <div className={title}>
        <a as={Link} href='/' className='nameLink'><h1><span className='spaceName'>C r a i g</span> <span>L e s l i e</span></h1></a>
        <h3>{title === 'name' ? 'Software Engineer' : title}</h3>
    </div>
  )
}

export default Header