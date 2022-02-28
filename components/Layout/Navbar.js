import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <>
      <nav>
        <ul>
          <div className="mt-4">
            <li className={router.pathname == "/" ? "activelink" : null}>
              <Link href="/">&nbsp;Case Study</Link>
            </li>
            <li className={router.pathname == "/bloglist" ? "activelink" : null}>
              <Link href="/bloglist">&nbsp; Blog</Link>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
