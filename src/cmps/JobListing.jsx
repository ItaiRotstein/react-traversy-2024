import { Link } from "react-router-dom";
import { FaMapMarker } from "react-icons/fa"

const JobListing = ({ job }) => {

    let description = job.description;
    //add ... at the end of the word after length of 90
    if (description.length > 90) {
        description = description.substring(0, description.indexOf(' ', 90)) + '...';
    }

    return (
        <Link to={`/job/${job.id}`}>
            <div className="bg-white hover:transition-all hover:outline outline-blue-500 outline-2 rounded-xl shadow-md relative cursor-pointer">
                <div className="p-4">
                    <div className="mb-6">
                        <div className="text-gray-600 my-2">{job.type}</div>
                        <h3 className="text-xl font-bold">{job.title}</h3>
                    </div>

                    <div className="mb-5">
                        {description}
                    </div>

                    {/* {description.length > 90 && <button onClick={() => buttonHandler()} className="text-indigo-500 mb-5 hover:text-indigo-600">{isShowFullDescription ? "less" : "more"}</button>} */}

                    <h3 className="text-indigo-500 mb-2">{job.salary}</h3>

                    <div className="border border-gray-100 mb-5"></div>

                    <div className="flex flex-col lg:flex-row justify-between mb-4">
                        <div className="text-orange-700 mb-3">
                            <FaMapMarker className="inline text-lg mb-1 mr-1" />
                            {job.location}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
export default JobListing