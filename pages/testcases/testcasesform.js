import CkEditor from "../ckeditor/Ckeditor";
import { baseUrl } from "../api/hello";
import { useState, useEffect } from "react";
const Testcasesform = () => {

    // const [items, setItems] = useState([]);
    // useEffect(() => {
    //     fetch(`${baseUrl}data?PK=aa`)
    //         .then((res) => res.json())
    //         .then(
    //             (result) => {
    //                 // setIsLoaded(true);
    //                 setItems(result.data);
    //                 console.log(items)
    //             },
    //         );
    // }, []);
    // const clickhandaler = () => {
    //     console.log(setItems)
    // }
    // const data =
    // {
    //     title: '',
    //     description: ''

    // }
    // console.log(data);

    const [test, setTest] = useState()
    // useEffect(() => {
    async function Postdata() {
        const response = await fetch(`${baseUrl}postdata`, {
            method: 'POST',
            body: JSON.stringify({ test }),
            headers: {
                'content-Type': 'application/json',

            }
        })
        const data = await response.json({})

        // setTests(data)
        console.log(data);
        // } catch (error) {
        // const err = error
        // if (err.response) {
        //     console.log(err.response)
        //     console.log(err.response)
        // }
    }

    // }, []);
    const handleSubmit = (event) => {
        // alert('A name was submitted: ' + this.state.value);
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
                        onChange={((e) => {
                            setTest(e.target.value)
                        })}
                        className="form-control"
                    />

                </div>
                <div className=" mt-4 mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label font_1">
                        Description
                    </label>
                    <CkEditor
                    // name="description"
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label font_1">
                        Client Profile
                    </label>
                    <CkEditor onChange={((e) => { setTest(e.target.value) })} />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label font_1">
                        Challenge
                    </label>
                    <CkEditor onChange={((e) => { setTest(e.target.value) })} />
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
                        onChange={((e) => { setTest(e.target.value) })}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label font_1">
                        Solution
                    </label>
                    <CkEditor onChange={((e) => { setTest(e.target.value) })} />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label font_1">
                        Key Benefits
                    </label>
                    <CkEditor onChange={((e) => { setTest(e.target.value) })} />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label font_1">
                        Used technologies
                    </label>
                    <CkEditor onChange={((e) => { setTest(e.target.value) })} />
                </div>
                <button
                    type="submit"
                    onClick={() => {
                        Postdata();
                    }} className="btn btn-secondary btn-lg shadow-lg buttonform mt-4 mb-4 rounded">
                    submit
                </button>

            </form>
        </>
    )
}

export default Testcasesform;

