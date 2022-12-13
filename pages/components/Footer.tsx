import Link from "next/link"
export default function Footer() {
  return (
    <footer id="footer">
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 pt-5 pt-lg-0">
                        <br /><br />
                        <h1>Let&apos;s work together</h1><br />
                        <Link href="/Contact" className="btn-get-started">Contact Us</Link>
                    </div>
                    <div className="col-xl-6 col-lg-6 pt-5 pt-lg-0">
                        <Link href="https://www.linkedin.com/company/asia-focus-group/" target="_blank">AFG LinkedIn</Link><br />
                        <Link href="mailto:hello@focusgroup.asia">Hello@FocusGroup.Asia</Link><br />
                        <Link href="tel:+65 6909 5800">+65 6909 5800</Link>
                        <br /><br />
                        <p>
                            114 LAVENDER STREET<br />
                            #02-57<br />
                            SINGAPORE 338729<br /><br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                &copy; Asia Focus Group @DateTime.Now.Year. All Rights Reserved
            </div>
            <div className="credits">
                <p><Link href="/Privacy">privacy policy</Link></p>
            </div>
        </div>
    </footer>
  )
}