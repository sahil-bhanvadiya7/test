import Navbar from "./Navbar";
function Layout(props) {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
      <footer>
        <p>Powered By Seaflux</p>
      </footer>
    </>
  );
}

export default Layout;
