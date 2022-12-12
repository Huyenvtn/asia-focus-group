import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"/>
      {/* Vendor JS Files */}
      <Script src="/static/vendor/jquery/jquery.min.js" />
      <Script src="/static/vendor/bootstrap/js/bootstrap.bundle.min.js" />
      <Script src="/static/vendor/jquery.easing/jquery.easing.min.js" />
      <Script src="/static/vendor/php-email-form/validate.js" />
      <Script src="/static/vendor/owl.carousel/owl.carousel.min.js" />
      <Script src="/static/vendor/isotope-layout/isotope.pkgd.min.js" />
      <Script src="/static/vendor/venobox/venobox.min.js" />
      <Script src="/static/vendor/aos/aos.js" />
      {/* Template Main JS File */}
      <Script src="/static/js/main.js" />
        <NextScript />
      </body>
    </Html>
  )
}