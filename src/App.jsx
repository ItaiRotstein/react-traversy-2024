import Navbar from './cmps/Navbar'
import Hero from './cmps/Hero'
import HomeCards from './cmps/HomeCards'
import JobListings from './cmps/JobListings'
import ViewAllJobs from './cmps/ViewAllJobs'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <HomeCards/>
      <JobListings/>
      <ViewAllJobs/>
    </>
  )
}

export default App