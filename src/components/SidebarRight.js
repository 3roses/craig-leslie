import './assets/sidebarRight.css'
import {Link} from 'react-router-dom'

export const SidebarRight = () => {
  return (
    <aside className='sidenav-rt'>
        <Link className='icon-rt' to="/projects">Projects</Link>
        <Link className='icon-rt' to="/about">Bio</Link>
        <a className='icon-rt' href='https://docs.google.com/document/d/1OwXVNU7gS-IJWlV06PLVgitHxMju1cnCMszprEaawv0/edit?usp=sharing'>Resume</a>
    </aside>
  )
};