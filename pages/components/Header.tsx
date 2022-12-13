import Link from "next/link"
import Image from "next/image"
export default function Header() {
  return (
    <header id="header" className="fixed-top">
        <div className="container d-flex">
            <div className="logo mr-auto">
                <Link href="/"><div className="img-fluid"><Image src="/static/images/favicon.png" alt="" width={55} height={55}/></div></Link>
            </div>

            <nav className="nav-menu d-none d-lg-block">
                <ul>
                    <li className="active" ><Link href="/About">About Us</Link></li>
                    <li className="active" ><Link href="/Contact">Contact Us</Link></li>
                </ul>
            </nav>

        </div>
    </header>
  )
}