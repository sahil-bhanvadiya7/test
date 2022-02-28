import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const CasestudyList = () => {
  const router = useRouter();

  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then(
        (result) => {
          // setIsLoaded(true);
          // const dataOfAPI = result.Items[0];
          setBlog(result);

          console.log(blog);
        }
      );
  }, []);

  return (
    <>
      <div className="wrapper">
        <button
          type="button"
          className="addbutton"
          onClick={() => router.push("/casestudycreateform")}
        >
          ADD CaseStudy
        </button>
        <h1>CaseStudy list</h1>
        <div className="container mt-5">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Sr#</th>
                <th scope="col">Title</th>
              </tr>
            </thead>

            <tbody>
              <button
                className="editbutton "
                type="button"
                onClick={() => router.push("/casestudyeditform")}
              >
                Edit
              </button>
              {/* {currentItems.map((value, i) => (
                                <tr key={value.id}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{value}</td>
                                    <td>{value}</td>

                                    <td>
                                        <blogedit />
                                    </td>
                                </tr>
                            ))} */}
              {/* <tr hidden={currentItems.length !== 0}>
                                <td colSpan='5' className="text-center">No Data Found</td>
                            </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CasestudyList;
