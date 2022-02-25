import Navbar from "../Sidebar"
import Blogedit from "../blogedit"
import { useRouter } from "next/router";
import { useState, useEffect } from "react";


const bloglist = () => {
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
                },
                // console.log(items)

            );
    }, []);
    return (
        <>
            <Navbar />
            <div className="wrapper">
                <button className='addbutton' type="button" onClick={() => router.push('/blogcreateform')}>
                    ADD Blog
                </button>
                <div className="container mt-5">
                    <h1>Blog List</h1>
                    {/* <h2>bloglist table</h2> */}
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Sr#</th>
                                <th scope="col">Title</th>
                            </tr>
                        </thead>

                        <tbody>
                            <Blogedit />
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
    )
}

export default bloglist