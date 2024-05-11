import { Outlet, useNavigation } from 'react-router-dom'
import Navbar from '../components/Navbar'

const HomeLayout = () => {
  const navigation = useNavigation()
  console.log(navigation)
  const isPageLoading = navigation.state === 'loading';
  const value = 'some value'

  return (
    <>
      <Navbar />
      {/* n React Router, the <Outlet/> component is a placeholder where child routes are rendered. It is typically used in layout components to render the child routes defined in the parent route component. */}
      <section className="page">
        {isPageLoading ? <div className="loading"></div> : <Outlet context={{value}} />}
      </section>
    </>
  )
}
export default HomeLayout
