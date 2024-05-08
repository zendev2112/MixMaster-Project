import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      {/* n React Router, the <Outlet/> component is a placeholder where child routes are rendered. It is typically used in layout components to render the child routes defined in the parent route component. */}
      <section className="page">
        <Outlet />
      </section>
    </>
  )
}
export default HomeLayout
