import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <nav>
                <ul >
                    <div>
                        <li><Link href="/">&nbsp;Case Study</Link></li>
                        <li><Link href="/bloglist">&nbsp; Blog</Link></li>
                    </div>
                </ul>
            </nav>

        </>
    )
}

export default Navbar