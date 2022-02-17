import React, { useState, useEffect } from "react";
import Editor from "./Editor";


const CkEditor = () => {
    const [editorLoaded, setEditorLoaded] = useState(false);

    useEffect(() => {
        setEditorLoaded(true);
    }, []);
    return (
        <>

            <Editor
                name="description"
                editorLoaded={editorLoaded}
            />


        </>
    )
}

export default CkEditor