import AboutUs from "./AboutUs"
import Banner from "./Banner"
import Hero from "./Hero"
import Mission from "./Mission"
import RecentWork from "./RecentWork"
import Service from "./Service"
import TeamMembers from "./Team"



const Home = () => {
  return (
    <main className=" w-full h-fit bg-primary">
      <Hero/>
      <Service/>
      <AboutUs/>
      <Mission/>
      <TeamMembers/>
      <RecentWork/>
      <Banner/>
    </main>
  )
}

export default Home