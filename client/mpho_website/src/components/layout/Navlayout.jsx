import NavBar from './Navbar'
import { Outlet } from "react-router-dom";
import MainSection from './MainSection';

 function Layout() {
  return (
    <div>
      <NavBar /> 
      <MainSection /> 
      <main>
        <Outlet /> 
      </main>
    </div>
  );
}

export default Layout
