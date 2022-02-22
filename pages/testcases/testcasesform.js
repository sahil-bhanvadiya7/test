// import CkEditor from "../ckeditor/Ckeditor";
import Editor from "../ckeditor/Editor";
import { baseUrl } from "../api/hello";
import { useState, useEffect } from "react";

const Testcasesform = () => {
    // console.log(data);
    // ***************** react style api integration ***********************
    // const [comment, setComment] = useState(data);
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState(null);

    // const [item, setItem] = useState({})



    useEffect(() => {
        setEditorLoaded(true);
    }, []);

    useEffect(() => {
        fetch(`${baseUrl}test-case?PK=00f6edc1-18a8-45b9-9f21-fa4d21a5b1ac`)
            .then((res) => res.json())
            .then(
                (result) => {
                    setData(result);
                    console.log(result)
                },
            );
    }, []);

    // const [test, setTest] = useState()
    // useEffect(() => {
    // async function Postdata() {
    //     const response = await fetch(), {
    //         method: 'POST',
    //         body: JSON.stringify({ test }),
    //         headers: {
    //             'content-Type': 'application/json',

    //         }
    //     })
    //     const data = await response.json({})

    // const registerUser = event => {
    //     event.preventDefault() // don't redirect the page
    //     // where we'll add our form logic
    // }
    const updateData = async () => {

        const response = await fetch(`${baseUrl}test-case?PK=00f6edc1-18a8-45b9-9f21-fa4d21a5b1ac`, {
            method: 'PUT',
            body: JSON.stringify({
                data: data
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)

    }
    const submitData = async () => {
        const response = await fetch(`${baseUrl}test-case?PK=00f6edc1-18a8-45b9-9f21-fa4d21a5b1ac`, {
            method: 'POST',
            body: JSON.stringify({
                data: data
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label font_1">
                        Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={data && data.Items[0].title}
                        className="form-control"
                        onChange={((event) => {
                            const temp = { ...data }
                            temp.Items[0].title = event.target.value
                            setData(temp)
                        })}
                    />

                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label font_1">
                        Client Profile
                    </label>
                    <Editor
                        name="clientprofile"
                        value={data && data.Items[0].clientProfile}
                        editorLoaded={editorLoaded}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label font_1">
                        Challenge
                    </label>
                    <Editor
                        name="challenge"
                        value={data && data.Items[0].challenge}
                        editorLoaded={editorLoaded}
                    />
                </div>
                <div className=" mt-4 mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label font_1">
                        Industry
                    </label>
                    <input
                        type="text"
                        name="indutry"
                        value={data && data.Items[0].industry}
                        className="form-control"
                        onChange={
                            ((event) => {
                                const temp = { ...data }
                                temp.Items[0].industry = event.target.value
                                setData(temp)
                            }
                            )}
                    />
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
                        SubTitle
                    </label>
                    <input
                        type="text"
                        name="subtitle"
                        value={data && data.Items[0].subTitle}
                        className="form-control"
                        onChange={((event) => {
                            const temp = { ...data }
                            temp.Items[0].subTitle = event.target.value
                            setData(temp)
                            // console.log(data)
                        })}
                    />
                    {/* <CkEditor onChange={((e) => { setTest(e.target.value) })} /> */}
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="formFileLg"
                        className="form-label font_1">
                        Main Image
                    </label>
                    <input
                        className="form-control form-control-lg"
                        id="formFileLg"
                        type="file"
                        accept="image/*"

                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="formFileLg"
                        className="form-label font_1">
                        Thumb Image
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
                    <Editor
                        name="solution"
                        value={data && data.Items[0].solution}
                        editorLoaded={editorLoaded}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label font_1">
                        Techs
                    </label>
                    <input
                        type="text"
                        name="techs"
                        value={data && data.Items[0].techs}
                        className="form-control"
                        onChange={((event) => {
                            const temp = { ...data }
                            temp.Items[0].techs = event.target.value
                            setData(temp)
                            console.log(data)
                        })}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label font_1">
                        Key Benefits
                    </label>
                    <input
                        type="text"
                        value={data && data.Items[0].keyBenefits}
                        name="keybenefits"
                        className="form-control"
                        onChange={((event) => {
                            const temp = { ...data }
                            temp.Items[0].keyBenefits = event.target.value
                            setData(temp)
                            // console.log(data)
                        })}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label font_1">
                        Slug
                    </label>
                    <input
                        type="text"
                        value={data && data.Items[0].slug}
                        name="slug"
                        className="form-control"
                        onChange={((event) => {
                            const temp = { ...data }
                            temp.Items[0].slug = event.target.value
                            setData(temp)
                            // console.log(data)
                        })}
                    />
                </div>
                <div className="bton_45">
                    <button
                        onClick={updateData}
                        type="submit"
                        className="btn btn-secondary btn-lg shadow-lg buttonform mt-4 mb-4 rounded">
                        Update
                    </button>
                    <div className="bton_btn" />
                    <button
                        onClick={submitData}
                        type="submit"
                        className="btn btn-secondary btn-lg  shadow-lg buttonform mt-4 mb-4 rounded">
                        submit
                    </button>
                </div>
            </form>
        </>
    )
}

export default Testcasesform;

