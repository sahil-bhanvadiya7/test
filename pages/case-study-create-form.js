import Editor from "../components/ckeditor/Editor";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Select from "react-select";
import { dropdownData } from "../components/dropdownData";
import LoadingModal from "../components/Modal/LoadingModal";
const CasestudyCreateform = () => {
  const router = useRouter();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [title, setTitle] = useState("");
  const [entityName, setEntityName] = useState("");
  const [clientProfile, setClientProfile] = useState("");
  const [image, setimage] = useState("");
  const [challenge, setChallenge] = useState("");
  const [industry, setindustry] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [solution, setSolution] = useState("");
  const [techs, setTechs] = useState([]);
  const [keyBenefits, setKeyBenefits] = useState("");
  const [mainImage, setmainImage] = useState("");
  const [thumbImage, setthumbImage] = useState("");
  const [slug, setSlug] = useState("");
  const [Image, setImage] = useState({ file: null });
  const [MainImage, setMainImage] = useState({ file: null });
  const [ThumbImage, setThumbImage] = useState({ file: null });
  const [imageLoading, setimageLoading] = useState(false);
  const [mainImageLoading, setMainImageLoading] = useState(false);
  const [thumbImageLoading, setThumbImageLoading] = useState(false);
  // const uploadLoading = imageLoading || mainImageLoading || thumbImageLoading;
  // const [data, setData] = useState({
  //   title: "",
  //   entityName: "",
  //   clientProfile: "",
  //   image: "",
  //   challenge: "",
  //   industry: "",
  //   subTitle: "",
  //   solution: "",
  //   techs: "",
  //   keyBenefits: "",
  //   thumbImage: "",
  //   mainImage: "",
  //   slug: "",
  // });

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
    entityName,
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
    const url = process.env.NEXT_PUBLIC_BASE_URL;
    fetch(`${url}case-studies`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((response) => {
      response.ok &&
        router.replace("/") &&
        toast.success("Case-Study created successfully.");
    });
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
                Entity Name
              </label>
              <input
                type="text"
                name="entityname"
                value={entityName}
                className="form-control"
                onChange={(event) => {
                  setEntityName(event.target.value);
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
                // disabled={mainImageLoading || thumbImageLoading}
                onClick={onImageUploadHandler}
              >
                {imageLoading ? "Uploading..." : "Upload Image"}
              </button>
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
                // disabled={imageLoading || thumbImageLoading}
                onClick={onMainImageUploadHandler}
              >
                {mainImageLoading ? "Uploading..." : "Upload Image"}
              </button>
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
                // disabled={imageLoading || mainImageLoading}
                onClick={onThumbImageUploadHandler}
              >
                {thumbImageLoading ? "Uploading..." : "Upload Image"}
              </button>
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

            <input type="submit" className="btn" value="Create" />
          </form>
        </div>
        {/* {uploadLoading && <LoadingModal />} */}
      </div>
    </>
  );
};

export default CasestudyCreateform;
