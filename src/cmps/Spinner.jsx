import { ClipLoader } from "react-spinners"

const Spinner = ({ loading }) => {

    const override = {
        display: 'block',
        margin: '100px auto'
    }

    return (
        <>
            <ClipLoader
                color="#4338ca"
                loading={loading}
                cssOverride={override}
                size={100}
            />
        </>
    )
}
export default Spinner