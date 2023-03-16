import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import Explore from "./pages/Explore"
import Offers from "./pages/Offers"
import Category from "./pages/Category"
import Profile from "./pages/Profile"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Forgotpassword from "./pages/Forgotpassword"
import Navbar from "./components/Navbar"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import Privateroute from "./components/Privateroute"
import CreateListing from "./pages/CreateListing"
import Listing from "./pages/Listing"
import Contact from "./pages/Contact"
import EditListing from "./pages/EditListing"

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Explore/>} />
          <Route path='/offers' element={<Offers/>} />
          <Route path='/category/:categoryName' element={<Category/>} />
          <Route path='/profile' element={<Privateroute/>}>
            <Route path='/profile' element={<Profile/>} />
          </Route>
          <Route path='/signin' element={<Signin/>} />
          <Route path='/sign-up' element={<Signup/>} />
          <Route path='/forgotpassword' element={<Forgotpassword/>} />
          <Route path='/create-listing' element={<CreateListing/>} />
          <Route path='/edit-listing/:listingId' element={<EditListing/>} />
          <Route path='/category/:categoryName/:listingId' element={<Listing/>} /> 
          <Route path='/contact/:landlordId' element={<Contact/>} /> 

        </Routes>
        <Navbar/>
      </Router>
      <ToastContainer/>
    </>
  )
}

export default App
