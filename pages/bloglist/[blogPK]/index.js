import Editor from "../../../components/ckeditor/Editor";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const BlogEditform = ({ posts, encoded }) => {
  const router = useRouter();
  // console.log(posts);
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [blog, setBlog] = useState({
    title: posts.title,
    body: posts.body,
    slug: posts.slug,
    image: posts.image,
    entityName: posts.entityName,
    services: posts.services,
    shortDesc: posts.shortDesc,
  });
  const [blogImage, setBlogImage] = useState({ file: null });
  const [imageLoading, setimageLoading] = useState(false);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  console.log(blog);
  const handleChange = (ckEditorData) => {
    const temp = { ...blog };
    temp.body = ckEditorData.data;
    setBlog(temp);
  };
  const onBlogImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setBlogImage({ file: img });
    }
  };
  const onImageUploadHandler = (e) => {
    e.preventDefault();
    const url = process.env.NEXT_PUBLIC_BASE_URL;
    const formData = new FormData();
    formData.append("image", blogImage.file);
    if (blogImage.file) {
      setimageLoading(true);
      fetch(`${url}blogs/images`, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          const temp = { ...blog };
          temp.image = data.imagePath;
          setBlog(temp);
          setimageLoading(false);
        });
    }
  };
  const submit = () => {
    const url = process.env.NEXT_PUBLIC_BASE_URL;
    fetch(`${url}blogs/${encoded}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then((response) => response.ok && router.push("/bloglist"));
  };
  return (
    <>
      <div className="wrapper">
        <h1 className="ms-4 text-center">Edit Blog</h1>
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
            {/* <div className="mb-5">
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
                }}
                className="form-control"
              />
            </div> */}
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label font_1"
              >
                Image
              </label>
              <input
                type="file"
                accept="image/*"
                name="file"
                className="form-control"
                onChange={onBlogImageChange}
              />
            </div>
            <div className="my-3">
              <button
                type="button my-3"
                className="btn"
                onClick={onImageUploadHandler}
              >
                {imageLoading ? "Uploading..." : "Upload Image"}
                {/* Upload Image */}
              </button>
            </div>
            <div className="mb-3">
              {blog.image ? (
                <img
                  src={blog.image}
                  style={{ objectFit: "cover", height: "100%", width: "100%" }}
                  alt="pic"
                />
              ) : (
                <p className="text-danger">Please upload image for preview.</p>
              )}
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
                }}
              />
            </div>
            <input type="submit" className="btn" value="Update" />
          </form>
        </div>
      </div>
    </>
  );
};
export async function getStaticPaths() {
  const url = process.env.BASE_URL;
  const res = await fetch(`${url}blogs/all`);
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: { blogPK: post.PK },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const url = process.env.BASE_URL;
  const getparams = params.blogPK;
  let encoded = encodeURIComponent(getparams);
  const res = await fetch(`${url}blogs/byId/${encoded}`);
  const posts = await res.json();
  return {
    props: {
      posts,
      encoded,
    },
  };
}
export default BlogEditform;
