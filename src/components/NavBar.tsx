import { Link } from "react-router-dom"
import { logo } from "../assets/icons"


const NavBar = () => {
  return (
    <section className=" relative flex items-center">
        <div className=" flex items-center justify-center gap-1">
            <img src={logo} alt="logo" className=" w-40 h-40" />
            <p className=" text-2xl font-bold text-secondary font-Rub pb-5"> <span className=" text-secondary-blue">TECH</span>OPIA</p>
        </div>
        <div className=" flex items-center font-poppins text-md">
           <Link to="/">Home</Link> 
           <Link to="/project">Projects</Link> 
           <Link to="/blog">Blogs</Link> 
           <Link to="/event">Events</Link> 
           <Link to="/contact_us">Contact Us</Link> 
        </div>

    </section>
  )
}

export default NavBar