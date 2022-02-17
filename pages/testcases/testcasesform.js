import CkEditor from "../ckeditor/Ckeditor";
import { baseUrl } from "../api/hello";
import { useState } from "react";
const Testcasesform = () => {
    const [test, setTest] = useState([])
    const [tests, setTests] = useState('')

    const fetchdata = async () => {
        const response = await fetch(`${baseUrl}data?PK=aa`)
        const data = await response.json()
        setTest(data)
        console.log(data);
    }
    const postdata = async () => {
        const response = await fetch(`${baseUrl}postdata`, {
            method: 'POST',
            body: JSON.stringify({ tests }),
            headers: {
                'content-Type': 'application/json',
            },
        })
        const data = await response.json()
    }
    return (
        <>


            <form>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label font_1">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                    />

                </div>
                <div className=" mt-4 mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label font_1">
                        Description
                    </label>
                    <CkEditor />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label font_1">
                        Client Profile
                    </label>
                    <CkEditor />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label font_1">
                        Challenge
                    </label>
                    <CkEditor />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="formFileLg"
                        className="form-label font_1">
                        Image Select
                    </label>
                    <input
                        className="form-control form-control-lg"
                        id="formFileLg"
                        type="file"
                        accept="image/*"
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label font_1">
                        Solution
                    </label>
                    <CkEditor />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label font_1">
                        Key Benefits
                    </label>
                    <CkEditor />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label font_1">
                        Used technologies
                    </label>
                    <CkEditor />
                </div>
                <button onClick={() => {
                    fetchdata();
                }} className="btn btn-primary">submit</button>

            </form>
        </>
    )
}

export default Testcasesform;

