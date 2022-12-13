import Link from "next/link"
import Image from "next/image"
import { useRouter } from 'next/router';
export default function Header() {
  const router = useRouter();
  return (
    <header id="header" className="fixed-top">
        <div className="container d-flex">
            <div className="logo mr-auto">
                <Link href="/"><div className="img-fluid"><Image src="/static/images/favicon.png" alt="" width={55} height={55}/></div></Link>
            </div>

            <nav className="nav-menu d-none d-lg-block">
                <ul>
                    <li className={router.pathname == "/About" ? "active" : ""} ><Link href="/About">About Us</Link></li>
                    <li className={router.pathname == "/Contact" ? "active" : ""} ><Link href="/Contact">Contact Us</Link></li>
                    <li className={router.pathname == "/Portfolio" ? "active" : ""} ><Link href="/Portfolio">Portfolio</Link></li>
                    <li className={router.pathname == "/OurExpertise" ? "active" : ""} ><Link href="/OurExpertise">Our Expertise</Link></li>
                </ul>
            </nav>

        </div>
    </header>
  )
}