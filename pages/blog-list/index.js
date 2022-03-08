import { useRouter } from "next/router";

const bloglist = ({ posts }) => {
  // console.log(posts);
  const router = useRouter();
  return (
    <>
      <div className="wrapper">
        <button
          className="btn float-end me-5 rounded-pill px-4 py-2"
          type="button"
          onClick={() => router.push("/blog-list/blog-create-form")}
        >
          ADD Blog
        </button>
        <h1 className="ms-3">Blog List</h1>
        <div className="container mt-5">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="text-center">
                  Sr#
                </th>
                <th scope="col" className="text-center">
                  Title
                </th>
              </tr>
            </thead>

            <tbody>
              {posts.map((value, i) => (
                <tr key={value.PK}>
                  <th scope="row" className="text-center">
                    {i + 1}
                  </th>
                  <td className="text-center">{value.title}</td>
                  <td className="text-center">
                    <button
                      type="button"
                      className="btn"
                      onClick={() =>
                        router.push("/blog-list/" + encodeURIComponent(value.PK))
                      }
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
              <tr hidden={posts.length !== 0}>
                <td colSpan="5" className="text-center">
                  No Data Found
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default bloglist;
export async function getStaticProps() {
  const url = process.env.BASE_URL;
  const res = await fetch(`${url}blogs/all`);
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
