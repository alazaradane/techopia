import AboutUs from "./AboutUs"
import Banner from "./Banner"
import ContactUs from "./ContactUs"
import Footer from "./Footer"
import Hero from "./Hero"
import Mission from "./Mission"
import RecentWork from "./RecentWork"
import Service from "./Service"
import TeamMembers from "./Team"
import Globe from "./Globe"


const Home = () => {
  return (
    <main className=" w-full h-fit bg-primary">
      <Hero/>
      <Service/>
      <AboutUs/>
      <Mission/>
      <TeamMembers/>
      <RecentWork/>
      <Globe/>
      <Banner/>
      <ContactUs/>
      <Footer/>
    </main>
  )
}

export default Home