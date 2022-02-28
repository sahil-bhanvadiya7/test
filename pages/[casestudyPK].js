import Editor from "../components/ckeditor/Editor";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const CaseStudyeditform = ({ posts, encoded }) => {
  const router = useRouter();
  console.log(posts);
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState({
    title: posts.title,
    entityName: posts.entityName,
    clientProfile: posts.clientProfile,
    image: posts.image,
    challenge: posts.challenge,
    industry: posts.industry,
    subTitle: posts.subTitle,
    solution: posts.solution,
    techs: posts.techs,
    keyBenefits: posts.keyBenefits,
    thumbImage: posts.thumbImage,
    mainImage: posts.mainImage,
    slug: posts.slug,
  });

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const handleChange = (ckEditorData) => {
    const temp = { ...data };
    temp[`${ckEditorData.id}`] = ckEditorData.data;
    setData(temp);
    // const temp = { ...ckEditorData }
    // setTarget(temp.data)
    console.log(ckEditorData);
  };
  const submit = () => {
    fetch(`https://eeea-117-217-127-227.ngrok.io/case-study/${encoded}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((response) => response.ok && router.push("/"));
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
                name="clientprofile"
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
                  setButton("Submit");
                }}
              />
            </div>
            <div className="mb-5">
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
                value={data.subTitle}
                className="form-control"
                // onChange={((e) => { setData(e.target.value) })}
                onChange={(event) => {
                  const temp = { ...data };
                  temp.subTitle = event.target.value;
                  setData(temp);
                  setButton("Submit");

                  // console.log(data)
                }}
              />
              {/* <CkEditor onChange={((e) => { setTest(e.target.value) })} /> */}
            </div>
            <div className="mb-5">
              <label htmlFor="formFileLg" className="form-label font_1">
                Main Image
              </label>
              <input
                type="text"
                name="mainimage"
                value={data.mainImage}
                className="form-control"
                onChange={(event) => {
                  const temp = { ...data };
                  temp.mainImage = event.target.value;
                  setData(temp);
                }}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="formFileLg" className="form-label font_1">
                Thumb Image
              </label>
              <input
                type="text"
                name="title"
                value={data.thumbImage}
                className="form-control"
                onChange={(event) => {
                  const temp = { ...data };
                  temp.thumbImage = event.target.value;
                  setData(temp);
                }}
              />
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
                  setButton("Submit");
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
                  setButton("Submit");
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
                  setButton("Submit");
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
  const res = await fetch(
    "https://eeea-117-217-127-227.ngrok.io/case-studies/all"
  );
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: { casestudyPK: post.PK },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const getparams = params.casestudyPK;
  let encoded = encodeURIComponent(getparams);
  const res = await fetch(
    `https://eeea-117-217-127-227.ngrok.io/case-study/${encoded}`
  );
  const posts = await res.json();
  return {
    props: {
      posts,
      encoded,
    },
  };
}
export default CaseStudyeditform;
