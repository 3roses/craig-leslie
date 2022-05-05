import './assets/sidebarLeft.css';
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { BsGithub, BsLinkedin, BsFillEnvelopeFill } from "react-icons/bs";

export const SidebarLeft = () => {
  return (
      <IconContext.Provider value={{ className: "shared-class", size: 70 }}>
        <aside className='sidenav'>
            <a className="icon" href='https://github.com/3roses' target='_blank' rel="noreferrer"><BsGithub/></a>
            <a className="icon" href='https://www.linkedin.com/in/craig-leslie/' target='_blank' rel="noreferrer"><BsLinkedin/></a>
            <Link className="icon" to='/contact'><BsFillEnvelopeFill/></Link>
        </aside>
     </IconContext.Provider>
  )
}
