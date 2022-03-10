import Editor from "../../../components/ckeditor/Editor";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
const BlogEditform = ({ posts, encoded, url }) => {
  const router = useRouter();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [title, setTitle] = useState(posts.title);
  const [body, setBody] = useState(posts.body);
  const [slug, setSlug] = useState(posts.slug);
  const [image, setImage] = useState(posts.image);
  const [services, setServices] = useState(posts.services);
  const [shortDesc, setShortDesc] = useState(posts.shortDesc);
  const [blogImage, setBlogImage] = useState({ file: null });
  const [imageLoading, setimageLoading] = useState(false);
  useEffect(() => {
    setEditorLoaded(true);
  }, []);
  const handleChange = (ckEditorData) => {
    setBody(ckEditorData.data);
  };
  const onBlogImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setBlogImage({ file: img });
    }
  };
  const onImageUploadHandler = (e) => {
    e.preventDefault();
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
          const responseImage = data.imagePath;
          setImage(responseImage);
          setimageLoading(false);
        });
    }
  };
  const blog = {
    title,
    body,
    slug,
    image,
    services,
    shortDesc,
  };
  const submit = () => {
    fetch(`${url}blogs/${encoded}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then((response) => {
      response.ok &&
        router.replace("/blog-list") &&
        toast.success("Blog edited successfully.");
    });
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
                value={title}
                className="form-control"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
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
                value={body}
              />
            </div>

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
            {blogImage.file ? (
              <div className="mb-3">
                <img
                  src={URL.createObjectURL(blogImage.file)}
                  style={{
                    objectFit: "cover",
                    height: "150px",
                    width: "150px",
                  }}
                  alt="beforepic"
                />
              </div>
            ) : (
              <p className="text-danger">Please select image for preview.</p>
            )}
            <div className="my-3">
              <button
                type="button my-3"
                className="btn"
                onClick={onImageUploadHandler}
              >
                {imageLoading ? "Uploading..." : "Upload Image"}
              </button>
            </div>
            <div className="mb-3">
              {!blogImage.file && image && (
                <img
                  src={image}
                  style={{
                    objectFit: "cover",
                    height: "150px",
                    width: "150px",
                  }}
                  alt="pic"
                />
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
                value={services}
                onChange={(event) => {
                  setServices(event.target.value);
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
                value={shortDesc}
                onChange={(event) => {
                  setShortDesc(event.target.value);
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
                value={slug}
                onChange={(event) => {
                  setSlug(event.target.value);
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
export const getServerSideProps = async (context) => {
  const blogPK = context.params.blogPK;
  const encoded = encodeURIComponent(blogPK);
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${url}case-studies/byId/${encoded}`);
  const posts = await res.json();
  return {
    props: {
      posts,
      encoded,
      url,
    },
  };
};
export default BlogEditform;
