import Head from 'next/head'
import Script from 'next/script'
import Header from './Header'
import Footer from './Footer'
import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        <title>Asia Focus Group</title>
        <meta content="" name="descriptison" />
        <meta content="" name="keywords" />
    </Head>
    
    <Script src="https://www.google.com/recaptcha/api.js" defer />
      </>
      <Header />
      <>{children}</>
      <Footer />
    </>
  )
}