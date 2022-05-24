import './assets/sidebarRight.css'
import {Link} from 'react-router-dom'

export const SidebarRight = () => {
  return (
    <aside className='sidenav-rt'>
        <Link className='icon-rt' to="/projects">Projects</Link>
        <Link className='icon-rt' to="/about">Bio</Link>
        <a className='icon-rt' href='https://docs.google.com/document/d/118L94Afb841hdRfTA10dM7Q9DRWn9MLE0xpW5VOwOc4/export?=pdf'>Resume</a>
    </aside>
  )
};