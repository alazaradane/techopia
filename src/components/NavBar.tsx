import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './ui/breadcrumb'
import { Input } from './ui/input';
import { DropdownMenuContent } from './ui/dropdown-menu';
import { DropdownMenu, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { search } from '../assets/images';


const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const RouterBreadcrumbLink = ({ to, children }: { to: string, children: React.ReactNode }) => (
  <Link to={to} className="breadcrumb-link">
    {children}
  </Link>
);

const NavBar = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const [position, setPosition] = React.useState("bottom") 
  return (
    <main className=' p-2 flex items-center justify-between  w-full relative -left-[2rem]'>
      <div className='text-slate-300 text-lg pl-1'>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className=' text-slate-300 text-lg'>
              <RouterBreadcrumbLink to="/">Home</RouterBreadcrumbLink>
            </BreadcrumbItem>
            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;
              return (
                <React.Fragment key={to}>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem className='text-slate-300 text-lg'>
                    {isLast ? (
                      <BreadcrumbPage className='text-slate-300 text-lg'>{capitalizeFirstLetter(value)}</BreadcrumbPage>
                    ) : (
                      <RouterBreadcrumbLink to={to}>{capitalizeFirstLetter(value)}</RouterBreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </React.Fragment>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className='mt-[0.5rem] flex gap-2 relative left-[5rem]'>
      <div className=" bg-primary flex items-center border-[1px] mx-[2rem] px-[1rem] py-[0.25rem] rounded-lg">
          <img src={search} alt="search icon" className="w-[1.5rem] h-[1.5rem]" />
          <Input
            placeholder="Search..."
            className=" rounded-lg border-none bg-primary placeholder:text-secondary focus:outline-none focus:border-transparent"
          />
        </div>
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className=' cursor-pointer'>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-36 bg-primary text-secondary px-3 ">
        <DropdownMenuLabel className=' mt-[1rem] mb-[0.25rem] font-semibold cursor-pointer'><Link to={'/profile'}>View Profile</Link></DropdownMenuLabel>
        <DropdownMenuLabel className=' mt-[1rem] mb-[0.25rem] font-semibold cursor-pointer'><Link to={'/profile/edit'}>Edit Profile</Link></DropdownMenuLabel>
        <DropdownMenuSeparator className=' text-secondary]' />
        <DropdownMenuRadioGroup className=' mb-[1rem] text-red-400 font-semibold cursor-pointer' value={position} onValueChange={setPosition}>
           <Link to={'/login'}>logout</Link>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
      </DropdownMenu>
      </div>
    </main>
  );
}

export default NavBar
