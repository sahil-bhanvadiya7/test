import React, { useState, useEffect } from "react";
import Editor from "./Editor";


const CkEditor = (props) => {
    const [editorLoaded, setEditorLoaded] = useState(false);

    useEffect(() => {
        setEditorLoaded(true);
    }, []);
    return (
        <>

            <Editor
                name="description"
                // value={props.data}
                editorLoaded={editorLoaded}
            />


        </>
    )
}

export default CkEditor