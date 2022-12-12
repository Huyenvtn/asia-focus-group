import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <title>Asia Focus Group</title>
        <meta content="" name="descriptison" />
        <meta content="" name="keywords" />

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

        {/* =======================================================
        * Template Name: Maxim - v2.1.0
        * Template URL: https://bootstrapmade.com/maxim-free-onepage-bootstrap-theme/
        * Author: BootstrapMade.com
        * License: https://bootstrapmade.com/license/
        ======================================================== */}

        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js nha!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples nè &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
     
    </div>
  )
}
