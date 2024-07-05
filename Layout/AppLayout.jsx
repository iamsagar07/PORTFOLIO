import { Outlet } from 'react-router-dom'
import Navbar from '../components/Header/Navbar'

const AppLayout = () => {
  return (
    <div  className="text-2xl">
        <Navbar />
        <main>
            <Outlet></Outlet>
        </main>
    </div>
  )
}

export default AppLayout