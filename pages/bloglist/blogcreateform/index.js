import Editor from "../../../components/ckeditor/Editor";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Blogcreateform = () => {
  const router = useRouter();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [blog, setBlog] = useState({
    title: "",
    body: "",
    slug: "",
    image: "",
    entityName: "",
    services: "",
    shortDesc: "",
  });

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const handleChange = (ckEditorData) => {
    const temp = { ...blog };
    temp.body = ckEditorData.data;
    setBlog(temp);
    // const temp = { ...ckEditorData }
    // setTarget(temp.data)
    console.log(ckEditorData);
  };
  const submit = () => {
    fetch("https://eeea-117-217-127-227.ngrok.io/blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then((response) => response.ok && router.push("/bloglist"));;
    // M.toast({ html: 'I am a toast!' })
  };
  return (
    <>
      <div className="wrapper">
      <h1 className="ms-4 text-center">Create Blog</h1>
        <div className="container mt-5 modifycontainer">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
          >
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label font_1"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                value={blog && blog.title}
                className="form-control"
                onChange={(event) => {
                  const temp = { ...blog };
                  temp.title = event.target.value;
                  setBlog(temp);
                }}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label font_1"
              >
                entity Name
              </label>
              <input
                type="text"
                name="entityName"
                value={blog && blog.entityName}
                onChange={(event) => {
                  const temp = { ...blog };
                  temp.entityName = event.target.value;
                  setBlog(temp);
                  console.log(blog);
                }}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label font_1"
              >
                Body
              </label>
              <Editor
                name="body"
                handleEditorData={handleChange}
                editorLoaded={editorLoaded}
                value={blog && blog.body}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="formFileLg" className="form-label font_1">
                Image Select
              </label>
              <input
                type="text"
                name="image"
                value={blog && blog.image}
                onChange={(event) => {
                  const temp = { ...blog };
                  temp.image = event.target.value;
                  setBlog(temp);
                  console.log(blog);
                }}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label font_1"
              >
                Services
              </label>
              <input
                type="text"
                name="services"
                className="form-control"
                value={blog && blog.services}
                onChange={(event) => {
                  const temp = { ...blog };
                  temp.services = event.target.value;
                  setBlog(temp);
                  console.log(blog);
                }}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label font_1"
              >
                Short Desc
              </label>
              <input
                type="text"
                name="shortDesc"
                className="form-control"
                value={blog && blog.shortDesc}
                onChange={(event) => {
                  const temp = { ...blog };
                  temp.shortDesc = event.target.value;
                  setBlog(temp);
                  console.log(blog);
                }}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label font_1"
              >
                Slug
              </label>
              <input
                type="text"
                name="slug"
                className="form-control"
                value={blog && blog.slug}
                onChange={(event) => {
                  const temp = { ...blog };
                  temp.slug = event.target.value;
                  setBlog(temp);
                  console.log(blog);
                }}
              />
            </div>
            <input
              type="submit"
              className="btn"
              value="Create"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Blogcreateform;
