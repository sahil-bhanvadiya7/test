import Editor from "../components/ckeditor/Editor";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Select from "react-select";
import { dropdownData } from "../components/dropdownData";
const CaseStudyeditform = ({ posts, encoded, url }) => {
  const router = useRouter();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [title, setTitle] = useState(posts.title);
  const [clientProfile, setClientProfile] = useState(posts.clientProfile);
  const [image, setimage] = useState(posts.image);
  const [challenge, setChallenge] = useState(posts.challenge);
  const [industry, setindustry] = useState(posts.industry);
  const [subTitle, setSubTitle] = useState(posts.subTitle);
  const [solution, setSolution] = useState(posts.solution);
  const [techs, setTechs] = useState(posts.techs);
  const [keyBenefits, setKeyBenefits] = useState(posts.keyBenefits);
  const [mainImage, setmainImage] = useState(posts.mainImage);
  const [thumbImage, setthumbImage] = useState(posts.thumbImage);
  const [slug, setSlug] = useState(posts.slug);
  const [Image, setImage] = useState({ file: null });
  const [MainImage, setMainImage] = useState({ file: null });
  const [ThumbImage, setThumbImage] = useState({ file: null });
  const [imageLoading, setimageLoading] = useState(false);
  const [mainImageLoading, setMainImageLoading] = useState(false);
  const [thumbImageLoading, setThumbImageLoading] = useState(false);
  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const handleChangeClient = (ckEditorData) => {
    setClientProfile(ckEditorData.data);
  };
  const handleChangeChallenge = (ckEditorData) => {
    setChallenge(ckEditorData.data);
  };
  const handleChangeSolution = (ckEditorData) => {
    setSolution(ckEditorData.data);
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setImage({ file: img });
    }
  };
  const onImageUploadHandler = (e) => {
    e.preventDefault();
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
          const responseImage = imgdata.imagePath;
          setimage(responseImage);
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
          const responseImage = imgdata.imagePath;
          setmainImage(responseImage);
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
          const responseImage = imgdata.imagePath;
          setthumbImage(responseImage);
          setThumbImageLoading(false);
        });
    }
  };
  const handleDropdownChange = (e) => {
    setTechs(Array.isArray(e) ? e.map((x) => x.value) : []);
  };
  const data = {
    title,
    clientProfile,
    image,
    challenge,
    industry,
    subTitle,
    solution,
    techs,
    keyBenefits,
    thumbImage,
    mainImage,
    slug,
  };
  const submit = () => {
    fetch(`${url}case-studies/${encoded}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((response) => {
      response.ok &&
        router.replace("/") &&
        toast.success("Case-Study edited successfully.");
    });
  };
  return (
    <>
      <div className="wrapper">
        <h1 className="ms-4 text-center">Edit CaseStudy</h1>
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
                Client Profile
              </label>
              <Editor
                name="clientProfile"
                handleEditorData={handleChangeClient}
                value={clientProfile}
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
                handleEditorData={handleChangeChallenge}
                value={challenge}
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
                value={industry}
                className="form-control"
                onChange={(event) => {
                  setindustry(event.target.value);
                }}
              />
            </div>

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
                value={subTitle}
                className="form-control"
                onChange={(event) => {
                  setSubTitle(event.target.value);
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
            {Image.file ? (
              <div className="mb-3">
                <img
                  src={URL.createObjectURL(Image.file)}
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
              {!Image.file && image && (
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
            {MainImage.file ? (
              <div className="mb-3">
                <img
                  src={URL.createObjectURL(MainImage.file)}
                  style={{
                    objectFit: "cover",
                    height: "150px",
                    width: "150px",
                  }}
                  alt="beforepic"
                />
              </div>
            ) : (
              <p className="text-danger">
                Please select Main image for preview.
              </p>
            )}
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
              {!MainImage.file && mainImage && (
                <img
                  src={mainImage}
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
            {ThumbImage.file ? (
              <div className="mb-3">
                <img
                  src={URL.createObjectURL(ThumbImage.file)}
                  style={{
                    objectFit: "cover",
                    height: "150px",
                    width: "150px",
                  }}
                  alt="beforepic"
                />
              </div>
            ) : (
              <p className="text-danger">
                Please select Thumb image for preview.
              </p>
            )}
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
              {!ThumbImage.file && thumbImage && (
                <img
                  src={thumbImage}
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
                Solution
              </label>
              <Editor
                name="solution"
                handleEditorData={handleChangeSolution}
                editorLoaded={editorLoaded}
                value={solution}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label font_1"
              >
                Techs
              </label>
              <Select
                id="long-value-select"
                instanceId="long-value-select"
                className="dropdown"
                placeholder="Select Option"
                value={dropdownData.filter((obj) => techs.includes(obj.value))}
                options={dropdownData}
                onChange={handleDropdownChange}
                isMulti
                isClearable
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
                value={keyBenefits}
                name="keybenefits"
                className="form-control"
                onChange={(event) => {
                  setKeyBenefits(event.target.value);
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
                value={slug}
                name="slug"
                className="form-control"
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
  const casestudyPK = context.params.casestudyPK;
  const encoded = encodeURIComponent(casestudyPK);
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

export default CaseStudyeditform;
