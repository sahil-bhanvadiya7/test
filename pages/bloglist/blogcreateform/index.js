import Editor from "../../../components/ckeditor/Editor";
import { useState, useEffect } from "react";
import { baseUrl } from "../../api/hello";

const Blogcreateform = () => {
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [button, setButton] = useState("update");
    const [blog, setBlog] = useState({
        title: "",
        body: "",
        slug: "",
        image: "",
        entityName: "",
        services: "",
        shortDesc: ""

    });

    useEffect(() => {
        setEditorLoaded(true);
    }, []);
    // useEffect(() => {
    //     fetch(`${baseUrl}blog?PK=547484e7-050d-4ac5-9208-fd31534dd9d8`)
    //         .then((res) => res.json())
    //         .then(
    //             (result) => {
    //                 // setIsLoaded(true);
    //                 // const dataOfAPI = result.Items[0];
    //                 setBlog(result);

    //                 console.log(blog);
    //             },
    //             // console.log(items)

    //         );
    // }, []);
    const handleChange = (ckEditorData) => {
        const temp = { ...blog }
        temp.body = ckEditorData.data
        setBlog(temp)
        // const temp = { ...ckEditorData }
        // setTarget(temp.data)
        console.log(ckEditorData)
    }
    const submit = () => {
        // e.preventDefault();
        fetch(`${baseUrl}blog?PK=547484e7-050d-4ac5-9208-fd31534dd9d8`, {
            method: 'POST',
            body: JSON.stringify({ blog })
        })
        // M.toast({ html: 'I am a toast!' })
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
                                // value={blog && blog.title}
                                className="form-control"
                                onChange={((event) => {
                                    const temp = { ...blog }
                                    temp.title = event.target.value
                                    setBlog(temp)
                                    setButton("submit")
                                })}
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label font_1">
                                entity Name
                            </label>
                            <input
                                type="text"
                                name="entityName"
                                // value={blog && blog.entityName}
                                onChange={((event) => {
                                    const temp = { ...blog }
                                    temp.entityName = event.target.value
                                    setBlog(temp)
                                    console.log(blog)
                                })}
                                className="form-control"
                            />
                        </div>

                        <div className="mb-3">
                            <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label font_1">
                                Body
                            </label>
                            <Editor
                                name="body"
                                handleEditorData={handleChange}
                                editorLoaded={editorLoaded}
                            // value={blog && blog.body}
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
                                // value={blog && blog.image}
                                onChange={((event) => {
                                    const temp = { ...blog }
                                    temp.image = event.target.value
                                    setBlog(temp)
                                    console.log(blog)
                                })}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label font_1">
                                Services
                            </label>
                            <input
                                type="text"
                                name="services"
                                className="form-control"
                                // value={blog && blog.services}
                                onChange={((event) => {
                                    const temp = { ...blog }
                                    temp.services = event.target.value
                                    setBlog(temp)
                                    console.log(blog)
                                })}
                            />

                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="exampleFormControlInput1"
                                className="form-label font_1">
                                Short Desc
                            </label>
                            <input
                                type="text"
                                name="shortDesc"
                                className="form-control"
                                // value={blog && blog.shortDesc}
                                onChange={((event) => {
                                    const temp = { ...blog }
                                    temp.shortDesc = event.target.value
                                    setBlog(temp)
                                    console.log(blog)
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
                                name="slug"
                                className="form-control"
                                // value={blog && blog.slug}
                                onChange={((event) => {
                                    const temp = { ...blog }
                                    temp.slug = event.target.value
                                    setBlog(temp)
                                    console.log(blog)
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

export default Blogcreateform