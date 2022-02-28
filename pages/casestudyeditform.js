import Editor from "../components/ckeditor/Editor";
import { baseUrl } from "./api/hello";
import { useState, useEffect } from "react";

const CaseStudyeditform = () => {
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState({
        title: "",
        entityName: "",
        clientProfile: "",
        image: "",
        challenge: "",
        industry: "",
        subTitle: "",
        solution: "",
        techs: "",
        keyBenefits: "",
        thumbImage: "",
        mainImage: "",
        slug: ""
    });
    const [button, setButton] = useState("update");

    useEffect(() => {
        setEditorLoaded(true);
    }, []);
    // useEffect(() => {
    //     fetch(`${baseUrl}test-case?PK=91f890f0-a76b-4bd6-9230-ab6e806e0f16`)
    //         .then((res) => res.json())
    //         .then(
    //             (result) => {
    //                 const dataOfAPI = result.Items[0];
    //                 setData(dataOfAPI);
    //                 console.log(dataOfAPI)
    //             },
    //         );
    // }, []);

    const handleChange = (ckEditorData) => {
        const temp = { ...data }
        temp[`${ckEditorData.id}`] = ckEditorData.data
        setData(temp)
        // const temp = { ...ckEditorData }
        // setTarget(temp.data)
        console.log(ckEditorData)
    }
    const submit = () => {
        // e.preventDefault();
        fetch(`${baseUrl}test-case?PK=91f890f0-a76b-4bd6-9230-ab6e806e0f16`, {
            method: 'POST',
            body: JSON.stringify({ data })
        })
    };
    return (
        <>
            <div className="wrapper">
                <div className="container mt-5">

                    <form onSubmit={(e) => { e.preventDefault(); submit() }}>
                        <div className="mb-3">
                            <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label font_1">
                                Title
                            </label>

                            <input
                                type="text"
                                name="title"
                                value={data.title}
                                className="form-control"
                                onChange={((event) => {
                                    const temp = { ...data }
                                    temp.title = event.target.value
                                    setData(temp)
                                })}
                            />

                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label font_1">
                                Entity Name
                            </label>
                            <input
                                type="text"
                                name="entityname"
                                value={data.entityName}
                                className="form-control"
                                onChange={((event) => {
                                    const temp = { ...data }
                                    temp.entityName = event.target.value
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
                                handleEditorData={handleChange}
                                value={data.clientProfile}
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
                                handleEditorData={handleChange}
                                value={data.challenge}
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
                                value={data.industry}
                                className="form-control"
                                onChange={
                                    ((event) => {
                                        const temp = { ...data }
                                        temp.industry = event.target.value
                                        setData(temp)
                                        setButton("Submit")
                                    })}
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="formFileLg"
                                className="form-label font_1">
                                Image Select
                            </label>
                            <input
                                type="text"
                                name="image"
                                value={data.image}
                                className="form-control"
                                onChange={((event) => {
                                    const temp = { ...data }
                                    temp.image = event.target.value
                                    setData(temp)
                                })}
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
                                value={data.subTitle}
                                className="form-control"
                                // onChange={((e) => { setData(e.target.value) })}
                                onChange={((event) => {
                                    const temp = { ...data }
                                    temp.subTitle = event.target.value
                                    setData(temp)
                                    setButton("Submit")

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
                                type="text"
                                name="mainimage"
                                value={data.mainImage}
                                className="form-control"
                                onChange={((event) => {
                                    const temp = { ...data }
                                    temp.mainImage = event.target.value
                                    setData(temp)
                                })}
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="formFileLg"
                                className="form-label font_1">
                                Thumb Image
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={data.thumbImage}
                                className="form-control"
                                onChange={((event) => {
                                    const temp = { ...data }
                                    temp.thumbImage = event.target.value
                                    setData(temp)
                                })}
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
                                handleEditorData={handleChange}
                                editorLoaded={editorLoaded}
                                value={data.solution}
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
                                value={data.techs}
                                className="form-control"
                                onChange={((event) => {
                                    const temp = { ...data }
                                    temp.techs = event.target.value
                                    setData(temp)
                                    setButton("Submit")
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
                                value={data.keyBenefits}
                                name="keybenefits"
                                className="form-control"
                                onChange={((event) => {
                                    const temp = { ...data }
                                    temp.keyBenefits = event.target.value
                                    setData(temp)
                                    setButton("Submit")
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
                                value={data.slug}
                                name="slug"
                                className="form-control"
                                onChange={((event) => {
                                    const temp = { ...data }
                                    temp.slug = event.target.value
                                    setData(temp)
                                    setButton("Submit")
                                })}
                            />
                        </div>
                        <input
                            type="submit"
                            className="btn btn-primary float-left btn-lg mt-4 mb-3 buttonform"
                            value={button}
                        />
                    </form>
                </div>
            </div>
        </>
    )
}

export default CaseStudyeditform;

