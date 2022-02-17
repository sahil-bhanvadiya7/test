import Navbar from "../Sidebar"
import Testcasesform from "./testcasesform"
const TestCases = () => {
    return (
        <>
            <Navbar />
            <div className="wrapper">
                <div className="container mt-5">
                    <Testcasesform />
                </div>
            </div>


        </>
    )
}

export default TestCases