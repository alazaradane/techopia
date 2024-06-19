
import { Link } from "react-router-dom";
import { logo } from "../assets/icons";
import { menu } from "../assets/images";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { navItems } from "../data";
import '../index.css'

const NavBar = () => {
  
  const idsToCheck = [5,6];
  const idLink = [1,2,3,4]
  return (
    <section className="relative flex items-center mb-5 p-4 lg:p-0">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <div className="flex items-center gap-1">
          <img src={logo} alt="logo" className="w-10 h-10 lg:w-40 lg:h-40" />
          <p className="text-xl lg:text-2xl font-bold text-secondary font-Rub pb-1 lg:pb-5">
            <span className=" bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ">TECH</span>OPIA
          </p>
        </div>
        <div className="lg:hidden bg-primary">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <img src={menu} alt="humburger" className=" w-5 h-5 m-3 cursor-pointer"/>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Explore</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {navItems.map(({id, name,link})=>(
                <DropdownMenuItem key={name}>
                  <Link to={link}>
                    {idLink.includes(id) && name}
                    {idsToCheck.includes(id) && <a href="service">{name}</a>}
                    {idsToCheck.includes(id) && <a href="about_us">{name}</a>}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

        </div>
      </div>

      <div className={`hidden lg:flex items-center ml-0 lg:ml-[10rem] mb-4 gap-4 lg:gap-[2rem] font-poppins font-semibold text-md text-secondary`}>
        {navItems.map((item)=>(
          <Link key={item.name} to={item.link} className="text-secondary group-hover:text-transparent bg-clip-text group-hover:bg-gradient-to-r">{item.name}</Link>
        ))}
      </div>
      <div className="hidden lg:flex items-center ml-0 lg:ml-[5rem] mb-4 font-poppins font-semibold text-md bg-white rounded-[2rem] px-5 py-2">
        <a href="#contact_us">Contact Us</a>
      </div>

    </section>
  );
};

export default NavBar;
