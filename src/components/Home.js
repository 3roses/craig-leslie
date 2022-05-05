import './assets/home.css';
import Header from './Header';
import { SidebarLeft } from './SidebarLeft';
import { SidebarRight } from './SidebarRight';


const Home = () => {
  return (
    <div className='homepage'>
      <Header title={'name'}/>
      <SidebarLeft />
      <SidebarRight />
    </div>
  )
}

export default Home