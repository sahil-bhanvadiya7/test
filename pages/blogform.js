import CkEditor from "./ckeditor/Ckeditor"
import Editor from "./ckeditor/Editor";
import { useState, useEffect } from "react";
import { baseUrl } from "./api/hello";

const Blogform = () => {
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState(null)

    useEffect(() => {
        setEditorLoaded(true);
    }, []);
    useEffect(() => {
        fetch(`${baseUrl}blog?PK=d1ac3afc-e688-4a37-8f59-eab08584fb35`)
            .then((res) => res.json())
            .then(
                (result) => {
                    // setIsLoaded(true);
                    setData(result);
                    console.log(result)
                },
                // console.log(items)

            );
    }, []);
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
                        name="title"
                        value={data && data.Items[0].title}
                        onChange={((event) => {
                            const temp = { ...data }
                            temp.Items[0].title = event.target.value
                            setData(temp)
                            console.log(data)
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
                        name="description"
                        value={data && data.Items[0].body}
                        editorLoaded={editorLoaded}
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
                    // onChange={((e) => { setTest(e.target.value) })}
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
                        name="title"
                        className="form-control"
                    // onChange={((event) => {
                    //     const temp = { ...data }
                    //     temp.Items[0].title = event.target.value
                    //     setData(temp)
                    //     // console.log(data)
                    // })}
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
                        name="title"
                        className="form-control"
                    // onChange={((event) => {
                    //     const temp = { ...data }
                    //     temp.Items[0].title = event.target.value
                    //     setData(temp)
                    //     // console.log(data)
                    // })}
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
                        name="title"
                        className="form-control"
                        value={data && data.Items[0].slug}
                        onChange={((event) => {
                            const temp = { ...data }
                            temp.Items[0].slug = event.target.value
                            setData(temp)
                            // console.log(data)
                        })}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-secondary btn-lg shadow-lg buttonform mt-4 mb-4 rounded">
                    submit
                </button>

            </form>
        </>
    )
}

export default Blogform