import CkEditor from "../ckeditor/Ckeditor";
const Testcasesform = () => {

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

            </form>
        </>
    )
}

export default Testcasesform;

