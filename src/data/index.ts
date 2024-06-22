import { dashboard, drawing, event, pen, plus, profile, view, web } from "../assets/images";



export const sidebar = [
    {id:1,  icon: dashboard, mlabel: "Dashboard", mlink:'/'},
    {id:2,  icon: web, mlabel: "Projects", vicon:view, vlabel:"View Projects", vlink:'/projects', cicon:plus, clabel: "Create Project", clink:'/projects/create'},
    {id:3,  icon: drawing, mlabel: "Blogs",vicon:view , vlabel:"View Blogs", vlink:'/blogs',cicon:plus, clabel: "Create Blogs", clink:'/blogs/create'},
    {id:4, icon: event, mlabel: "Events", vicon:view,vlabel:"View Events", vlink:'/events',cicon:plus, clabel: "Create Events", clink:'/events/create'},
    {id:5, icon: profile, mlabel: "Profile",vicon:view, vlabel:"View Profile", vlink:'/profile', cicon:pen,clabel: "Edit Profile", clink:'/profile/edit'}, 
]