import React, { useEffect, useRef } from "react";

function Editor({ onChange, editorLoaded, name, value }) {
    const editorRef = useRef();
    const { CKEditor, ClassicEditor } = editorRef.current || {};

    useEffect(() => {
        editorRef.current = {
            CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
            ClassicEditor: require("@ckeditor/ckeditor5-build-classic")
        };
    }, []);

    return (
        <>
            {editorLoaded ? (
                <div className="ck_editer">
                    <CKEditor
                        type=""
                        className="ck_editer1"
                        name={name}
                        editor={ClassicEditor}
                        data={value}
                        onChange={(event, editor) => {
                        }}
                    />
                </div>
            ) : (
                <div>Editor loading</div>
            )}
        </>
    );
}

export default Editor;