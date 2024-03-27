import Hero from '../cmps/Hero'
import HomeCards from '../cmps/HomeCards'
import JobListings from '../cmps/JobListings'
import ViewAllJobs from '../cmps/ViewAllJobs'

const HomePage = () => {
    return (
        <>
            <Hero />
            <HomeCards />
            <JobListings isHomePage={true}/>
            <ViewAllJobs />
        </>
    )
}
export default HomePage