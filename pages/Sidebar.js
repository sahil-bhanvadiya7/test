import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <nav>
                <ul >
                    <div>
                        <li><Link href="/">&nbsp;Test Cases</Link></li>
                        <li><Link href="/blog">&nbsp; Blog</Link></li>
                    </div>
                </ul>
            </nav>

        </>
    )
}

export default Navbar