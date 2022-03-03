import Editor from "../components/ckeditor/Editor";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const CasestudyCreateform = () => {
  const router = useRouter();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState({
    title: "",
    entityName: "",
    clientProfile: "",
    image: "",
    challenge: "",
    industry: "",
    subTitle: "",
    solution: "",
    techs: "",
    keyBenefits: "",
    thumbImage: "",
    mainImage: "",
    slug: "",
  });
  const [Image, setImage] = useState({ file: null });
  const [MainImage, setMainImage] = useState({ file: null });
  const [ThumbImage, setThumbImage] = useState({ file: null });
  const [imageLoading, setimageLoading] = useState(false);
  const [mainImageLoading, setMainImageLoading] = useState(false);
  const [thumbImageLoading, setThumbImageLoading] = useState(false);

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const handleChange = (ckEditorData) => {
    const temp = { ...data };
    temp[`${ckEditorData.id}`] = ckEditorData.data;
    setData(temp);
    console.log(ckEditorData);
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setImage({ file: img });
    }
  };
  const onImageUploadHandler = (e) => {
    e.preventDefault();
    const url = process.env.NEXT_PUBLIC_BASE_URL;
    const formData = new FormData();
    formData.append("image", Image.file);
    if (Image.file) {
      setimageLoading(true);
      fetch(`${url}blogs/images`, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((imgdata) => {
          const temp = { ...data };
          temp.image = imgdata.imagePath;
          setData(temp);
          setimageLoading(false);
        });
    }
  };
  const onMainImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setMainImage({ file: img });
    }
  };
  const onMainImageUploadHandler = (e) => {
    e.preventDefault();
    const url = process.env.NEXT_PUBLIC_BASE_URL;
    const formData = new FormData();
    formData.append("image", MainImage.file);
    if (MainImage.file) {
      setMainImageLoading(true);
      fetch(`${url}blogs/images`, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((imgdata) => {
          const temp = { ...data };
          temp.mainImage = imgdata.imagePath;
          setData(temp);
          setMainImageLoading(false);
        });
    }
  };
  const onThumbImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setThumbImage({ file: img });
    }
  };
  const onThumbImageUploadHandler = (e) => {
    e.preventDefault();
    const url = process.env.NEXT_PUBLIC_BASE_URL;
    const formData = new FormData();
    formData.append("image", ThumbImage.file);
    if (ThumbImage.file) {
      setThumbImageLoading(true);
      fetch(`${url}blogs/images`, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((imgdata) => {
          const temp = { ...data };
          temp.thumbImage = imgdata.imagePath;
          setData(temp);
          setThumbImageLoading(false);
        });
    }
  };

  const submit = () => {
    const url = process.env.NEXT_PUBLIC_BASE_URL;
    fetch(`${url}case-studies`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((response) => response.ok && router.push("/"));
    console.log(data);
  };
  return (
    <>
      <div className="wrapper">
        <h1 className="ms-4 text-center">Create CaseStudy</h1>
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
                value={data.title}
                className="form-control"
                onChange={(event) => {
                  const temp = { ...data };
                  temp.title = event.target.value;
                  setData(temp);
                }}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label font_1"
              >
                Entity Name
              </label>
              <input
                type="text"
                name="entityname"
                value={data.entityName}
                className="form-control"
                onChange={(event) => {
                  const temp = { ...data };
                  temp.entityName = event.target.value;
                  setData(temp);
                }}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label font_1"
              >
                Client Profile
              </label>
              <Editor
                name="clientProfile"
                handleEditorData={handleChange}
                value={data.clientProfile}
                editorLoaded={editorLoaded}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label font_1"
              >
                Challenge
              </label>
              <Editor
                name="challenge"
                handleEditorData={handleChange}
                value={data.challenge}
                editorLoaded={editorLoaded}
              />
            </div>
            <div className=" mt-4 mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label font_1"
              >
                Industry
              </label>
              <input
                type="text"
                name="indutry"
                value={data.industry}
                className="form-control"
                onChange={(event) => {
                  const temp = { ...data };
                  temp.industry = event.target.value;
                  setData(temp);
                }}
              />
            </div>
            {/* <div className="mb-5">
              <label htmlFor="formFileLg" className="form-label font_1">
                Image Select
              </label>
              <input
                type="text"
                name="image"
                value={data.image}
                className="form-control"
                onChange={(event) => {
                  const temp = { ...data };
                  temp.image = event.target.value;
                  setData(temp);
                }}
              />
            </div> */}

            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label font_1"
              >
                SubTitle
              </label>
              <input
                type="text"
                name="subtitle"
                value={data.subTitle}
                className="form-control"
                onChange={(event) => {
                  const temp = { ...data };
                  temp.subTitle = event.target.value;
                  setData(temp);
                }}
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
                onChange={onImageChange}
              />
            </div>
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
              {data.image ? (
                <img
                  src={data.image}
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
                Main Image
              </label>
              <input
                type="file"
                accept="image/*"
                name="mainfile"
                className="form-control"
                onChange={onMainImageChange}
              />
            </div>
            <div className="my-3">
              <button
                type="button my-3"
                className="btn"
                onClick={onMainImageUploadHandler}
              >
                {mainImageLoading ? "Uploading..." : "Upload Image"}
              </button>
            </div>
            <div className="mb-3">
              {data.mainImage ? (
                <img
                  src={data.mainImage}
                  style={{ objectFit: "cover", height: "100%", width: "100%" }}
                  alt="pic"
                />
              ) : (
                <p className="text-danger">
                  Please upload Main image for preview.
                </p>
              )}
            </div>

            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label font_1"
              >
                Thumb Image
              </label>
              <input
                type="file"
                accept="image/*"
                name="thumbfile"
                className="form-control"
                onChange={onThumbImageChange}
              />
            </div>
            <div className="my-3">
              <button
                type="button my-3"
                className="btn"
                onClick={onThumbImageUploadHandler}
              >
                {thumbImageLoading ? "Uploading..." : "Upload Image"}
              </button>
            </div>
            <div className="mb-3">
              {data.thumbImage ? (
                <img
                  src={data.thumbImage}
                  style={{ objectFit: "cover", height: "100%", width: "100%" }}
                  alt="pic"
                />
              ) : (
                <p className="text-danger">
                  Please upload Thumb image for preview.
                </p>
              )}
            </div>

            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label font_1"
              >
                Solution
              </label>
              <Editor
                name="solution"
                handleEditorData={handleChange}
                editorLoaded={editorLoaded}
                value={data.solution}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label font_1"
              >
                Techs
              </label>
              <input
                type="text"
                name="techs"
                value={data.techs}
                className="form-control"
                onChange={(event) => {
                  const temp = { ...data };
                  temp.techs = event.target.value;
                  setData(temp);
                }}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label font_1"
              >
                Key Benefits
              </label>
              <input
                type="text"
                value={data.keyBenefits}
                name="keybenefits"
                className="form-control"
                onChange={(event) => {
                  const temp = { ...data };
                  temp.keyBenefits = event.target.value;
                  setData(temp);
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
                value={data.slug}
                name="slug"
                className="form-control"
                onChange={(event) => {
                  const temp = { ...data };
                  temp.slug = event.target.value;
                  setData(temp);
                }}
              />
            </div>

            <input type="submit" className="btn" value="Create" />
          </form>
        </div>
      </div>
    </>
  );
};

export default CasestudyCreateform;
