import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <nav>
                <ul >
                    <div>
                        <li><Link href="/"><a>&nbsp;Test Cases</a></Link></li>
                        <li><Link href="/blog"><a>&nbsp; Blog</a></Link></li>
                    </div>
                </ul>
            </nav>

        </>
    )
}

export default Navbar