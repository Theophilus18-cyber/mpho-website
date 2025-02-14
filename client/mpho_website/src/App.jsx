import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Navlayout";
import Dashboard from "./dashboard/Dashboard";
import Login from "./authentication/SignIn";
import Register from "./authentication/SignUp";
import PostData from "./dashboard/postDetails";
import UserDetails from "./dashboard/userDetails";
import PostUserWithImage from "./dashboard/WithImage";


function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}> {/* Navbar will always be present */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<UserDetails />} />
          <Route path="/post" element={<PostData />} />
          <Route path="/post-image" element={<PostUserWithImage />} />
        </Route>

        {/* These pages won't have the Navbar */}
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
