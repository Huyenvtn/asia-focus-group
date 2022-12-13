import Link from "next/link"
import Image from "next/image"
export default function Home2() {
  return (
    <>
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="container">

              <div className="row">
                  <div className="col-xl-6 col-lg-5 pt-5 pt-lg-0">
                      {/* <!-- <h5 data-aos="fade-up">welcome</h5> --> */}
                      <br />
                      <h1 data-aos="fade-up">asia focus group —<br /> honing innovation on a global scale</h1>
                      <p data-aos="fade-up">
                          We are an angel-operator fund that aims to disrupt traditional venture models and providing entrepreneurs the support that they need to scale.
                      </p>

                  </div>
              </div>

          </div>
      </section>
      {/* <!-- End Hero --> */}

      <main id="main">

          {/* <!-- ======= About Section ======= --> */}
          <section id="about" className="about">
              <div className="container">

                  <div className="row">
                      <div className="col-xl-6 col-lg-5 pt-5 pt-lg-0">
                          <h5 data-aos="fade-up">what we do</h5>
                          <br />
                          <h1 data-aos="fade-up">Making great ventures globally disruptive</h1>
                          <p data-aos="fade-up">
                              Asia Focus Group empowers world-class ventures to create global impact. Our hands-on approach guides entrepreneurs from seed to scale through unparalleled mentorship, expertise and support. See our full list of services below.
                          </p>

                      </div>
                  </div>
                  <div className="row">
                      <div className="col-xl-6 col-lg-6 pt-5 pt-lg-0">
                          <div data-aos="fade-up" className="img-fluid afg-icon">
                            <Image src="/static/images/icons/gears.png" alt="" fill/>
                          </div>
                          
                          <h4 data-aos="fade-up">Venture Building</h4>
                          <p data-aos="fade-up">
                              We provide high-performance white-label full-fledged exchange solutions within 2 weeks. Build your brand with our state-of-the-art technology, highly secured platform and highly customized to suit your business objectives.<br /><br />Our robust platform ensures scalability and execution of orders in real time. Our portfolio of clients have garnered over 10,000 users on their platforms. 
                              {/* <!--Learn more about our exchange solutions <a href="exchange.html">here</a>. --> */}
                          </p>

                      </div>

                      <div className="col-xl-6 col-lg-6 pt-5 pt-lg-0">
                          <div data-aos="fade-up" className="img-fluid afg-icon">
                            <Image src="/static/images/icons/investments.png" alt="" fill/>
                          </div>
                          <h4 data-aos="fade-up">Investments</h4>
                          <p data-aos="fade-up">
                              We believe in a founder-first philosophy, investing in dedicated founding teams that will go on to create disruptive products and services across industries. Fiercely committed to honing world-class innovations, we grow with companies through the stages of development.<br /><br />Our intimate understanding of business needs stems from the hybrid nature of Asia Focus Group as a venture builder, venture capital and incubator.
                          </p>

                      </div>

                      <div className="col-xl-6 col-lg-6 pt-5 pt-lg-0">
                        <div data-aos="fade-up" className="img-fluid afg-icon">
                          <Image src="/static/images/icons/consultancy.png" alt="" fill/>
                        </div>
                          <h4 data-aos="fade-up">Consultancy</h4>
                          <p data-aos="fade-up">
                              Established companies can draw on the network and expertise of Asia Focus Group to revitalise their products and services. This includes strategic counsel on M&A and restructuring, as well as leveraging competencies in e-commerce, retail, F&B and technology.<br /><br />Companies will benefit from the vast human, financial and technological capital that thrives of Asia Focus Group.
                          </p>

                      </div>

                      <div className="col-xl-6 col-lg-6 pt-5 pt-lg-0">
                        <div data-aos="fade-up" className="img-fluid afg-icon">
                          <Image src="/static/images/icons/talent-acquisition.png" alt="" fill/>
                        </div>
                          <h4 data-aos="fade-up">Talent Acquisition</h4>
                          <p data-aos="fade-up">
                              As a new age company, Asia Focus Group understands the importance of talent not only in Finance but also in other business aspects like Marketing and Operations. We believe that teams can shape products and services, and therefore provide manpower sourcing for companies. <br /><br />Clients can tap into our network and extended subsidiaries to convert top-tier talent in technology, retail and related industries.
                          </p>

                      </div>

                  </div>
              </div>
          </section>



          <section id="clients">
              <div className="container">

                  <div className="row">
                      <div className="col-xl-6 col-lg-6 pt-5 pt-lg-0">
                          <h5 data-aos="fade-up">portfolio</h5>
                          <br />
                          <h1 data-aos="fade-up">our clients</h1>

                      </div>

                      <div className="col-xl-6 col-lg-5">
                          <p data-aos="fade-up">
                              Through our limited partners and strategic network in Asia and USA, we are able to value-add effectively to our extended group of companies and portfolio – bringing about significant economic and social impact on the world. Explore some of our products below.
                          </p>

                      </div>
                  </div>

                  <div className="row wow pt-5 align-middle" data-aos="fade-up">
                      <div className="col-xl-12 col-lg-12 pt-5 pb-5">
                          <h5 data-aos="fade-up">Companies We&apos;ve Funded</h5>
                      </div>
                      {/* @*<div className="col-md-2">
                          <a href="https://www.consentium.net/" target="_blank"><img src="/assets/img/logos/consentium-white.png" alt="" className="logo-mt" /></a>
                      </div>*@ */}

                      {/* @*<div className="col-md-2">
                          <a href="https://www.exonium.one/e/home" target="_blank"><img src="/assets/img/logos/exonium-white.png" alt="" className="logo-mt" /></a>
                      </div>*@ */}
                      <div className="col-md-2 align-middle">
                          <Link href="https://coinjax.com/" target="_blank">
                            <div className="logo-mt">
                              <Image src="/static/images/logos/coinjax-white.png" alt="" fill/>
                            </div>
                          </Link>
                      </div>

                      <div className="col-md-2 align-middle">
                          <Link href="https://beowulfchain.com/" target="_blank">
                          <div className="logo-mt">
                              <Image src="/static/images/logos/beowulf-white.png" alt="" fill/>
                            </div>
                          </Link>
                      </div>

                      {/* <!-- <div className="col-md-2">
                        <a href="https://www.linktrixmanpower.com/" target="_blank"><img src="/assets/img/logos/linktrix-white.png" alt=""></a>
                      </div>--> */}

                      <div className="col-md-2 align-middle">
                          <Link href="https://timelesspharma.com/" target="_blank">
                          <div className="logo-mt">
                              <Image src="/static/images/logos/timeless-white.png" alt="" fill/>
                            </div>
                          </Link>
                      </div>
                      <div className="col-md-2 align-middle">
                          <Link href="https://arionstable.com/" target="_blank">
                          <div className="logo-mt">
                              <Image src="/static/images/logos/arionstable_logo.png" alt="" fill/>
                            </div>
                            </Link>
                      </div>
                      {/* @*<div className="col-md-2">
                          <a href="https://www.blazeprotocol.io/" target="_blank"><img src="/assets/img/logos/blaze.png" alt="" className="logo-mt" /></a>
                      </div>*@ */}

                  </div>
              </div>
          </section>


      </main>
    </>
  )
} 