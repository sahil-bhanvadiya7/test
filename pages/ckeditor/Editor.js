import React, { useEffect, useRef } from "react";

function Editor(props) {
    const editorRef = useRef();
    const { CKEditor, ClassicEditor } = editorRef.current || {};

    useEffect(() => {
        editorRef.current = {
            CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
            ClassicEditor: require("@ckeditor/ckeditor5-build-classic")
        };
    }, []);

    const handleChange = (event, editor) => {
        const data = editor.getData();
        return props.handleEditorData({ id: props.name, data });
    }

    return (
        <>
            {props.editorLoaded ? (
                <div className="ck_editer">
                    <CKEditor
                        type=""
                        className="ck_editer1"
                        name={props.name}
                        value={props.data}
                        editor={ClassicEditor}
                        data={props.value}
                        onChange={
                            (event, editor) => {
                                handleChange(event, editor)
                            }
                        }
                    />
                </div>
            ) : (
                <div>Editor loading</div>
            )}
        </>
    );
}

export default Editor;