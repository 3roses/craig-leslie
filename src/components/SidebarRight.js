import './assets/sidebarRight.css'
import {Link} from 'react-router-dom'

export const SidebarRight = () => {
  return (
    <aside className='sidenav-rt'>
        <a className='icon-rt' as={Link} href="/projects">Projects</a>
        <a className='icon-rt' as={Link} href="/about">Bio</a>
        <a className='icon-rt' href='https://docs.google.com/document/d/1OwXVNU7gS-IJWlV06PLVgitHxMju1cnCMszprEaawv0/edit?usp=sharing'>Resume</a>
    </aside>
  )
};