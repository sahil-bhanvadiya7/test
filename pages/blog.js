import Navbar from "./Sidebar";
import Blogform from "./blogform";
const Blog = () => {
    return (
        <>
            <Navbar />
            <div className="wrapper">
                <div className="container mt-5">
                    <Blogform />
                </div>
            </div>
        </>
    )
}

export default Blog