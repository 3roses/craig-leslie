import './assets/home.css'
import { SidebarLeft } from './SidebarLeft';
import { SidebarRight } from './SidebarRight';

const picture = require('./assets/meandheights.jpeg')

const Home = () => {
  return (
    <div className='homepage'>
      <div className='name'>
        <h1><span className='spaceName'>C r a i g</span> <span>L e s l i e</span></h1>
        <h3>Software Engineer</h3>
      </div>
      <SidebarLeft />
      <SidebarRight />
    </div>
  )
}

export default Home