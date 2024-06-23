
import { cursor, dashboard, drawing, event, learn, pen, plus, profile, sbrain, secure, view, web } from "../assets/images";



export const sidebar = [
    {id:1,  icon: dashboard, mlabel: "Dashboard", mlink:'/'},
    {id:2,  icon: web, mlabel: "Projects", vicon:view, vlabel:"View Projects", vlink:'/projects', cicon:plus, clabel: "Create Project", clink:'/projects/create'},
    {id:3,  icon: drawing, mlabel: "Blogs",vicon:view , vlabel:"View Blogs", vlink:'/blogs',cicon:plus, clabel: "Create Blogs", clink:'/blogs/create'},
    {id:4, icon: event, mlabel: "Events", vicon:view,vlabel:"View Events", vlink:'/events',cicon:plus, clabel: "Create Events", clink:'/events/create'},
    {id:5, icon: profile, mlabel: "Profile",vicon:view, vlabel:"View Profile", vlink:'/profile', cicon:pen,clabel: "Edit Profile", clink:'/profile/edit'}, 
]

export const dashvalue =[
    {id:1, icon:web, title:"Projects", value:24, text:"+24 from last month"},
    {id:2, icon:drawing, title:"Blogs", value:"1k", text:"+50 from last month"},
    {id:3, icon:event, title:"Events", value:10, text:"+17 from last month"},
]

export const data = [
    { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
    { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
    { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
    { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
    { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
    { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
];

export const projects = [
    {
      title: 'Kintai kanry system',
      description: 'We offer top-notch performance to our clients by providing systematic and innovative services to cater to their key products & services.',
      technologies: ['React Native', 'Next.js', 'GraphQL', 'Figma'],
      image: learn, 
      icon:secure
    },
    {
      title: 'Oyu tolgoi catalyst fund for development',
      description: 'We offer top-notch services to our clients by providing systematic and innovative services to cater to their key products & services.',
      technologies: ['ReactJS', 'GraphQL', 'Figma'],
      image: sbrain, 
      icon:cursor
    },
  ]