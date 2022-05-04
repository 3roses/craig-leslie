import './assets/sidebarLeft.css';
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { BsGithub, BsLinkedin, BsFillEnvelopeFill } from "react-icons/bs";

export const SidebarLeft = () => {
  return (
      <IconContext.Provider value={{ className: "shared-class", size: 70 }}>
        <aside className='sidenav'>
            <a className="icon" href='https://github.com/3roses' target='_blank'><BsGithub/></a>
            <a className="icon" href='https://www.linkedin.com/in/craig-leslie/' target='_blank'><BsLinkedin/></a>
            <a className="icon" as={Link} href='contact'><BsFillEnvelopeFill/></a>
        </aside>
     </IconContext.Provider>
  )
}
