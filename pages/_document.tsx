import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Favicons */}
        <link href="/static/images/favicon.png" rel="icon" />
        <link href="/static/images/apple-touch-icon.png" rel="apple-touch-icon" />

         {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
       {/* Vendor CSS Files */}
       <link href="/static/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/static/vendor/icofont/icofont.min.css" rel="stylesheet" />
        <link href="/static/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
        <link href="/static/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="/static/vendor/venobox/venobox.css" rel="stylesheet" />
        <link href="/static/vendor/aos/aos.css" rel="stylesheet" />

        <link href="/static/css/font-awesome.min.css" rel="stylesheet" />
        {/* Template Main CSS File */}
        <link href="/static/css/globals.css?v=0.001" rel="stylesheet" />

      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" defer />
      {/* Vendor JS Files */}
      <script src="/static/vendor/jquery/jquery.min.js"defer  />
      <script src="/static/vendor/bootstrap/js/bootstrap.bundle.min.js"defer  />
      <script src="/static/vendor/jquery.easing/jquery.easing.min.js"defer  />
      <script src="/static/vendor/php-email-form/validate.js"defer  />
      <script src="/static/vendor/owl.carousel/owl.carousel.min.js" defer />
      <script src="/static/vendor/isotope-layout/isotope.pkgd.min.js"defer  />
      <script src="/static/vendor/venobox/venobox.min.js"defer  />
      <script src="/static/vendor/aos/aos.js"defer  />
      {/* Template Main JS File */}
      <script src="/static/js/main.js"defer  />
        
      </body>
    </Html>
  )
}