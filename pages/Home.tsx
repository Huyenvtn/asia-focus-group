import Link from "next/link"
import Image from "next/image"
export default function Home() {
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
                          We are a technology consult and enabler that aims to disrupt traditional economy models and provide entrepreneurs the support that they need to scale.
                      </p>

                  </div>
              </div>

          </div>
      </section>

      <main id="main">

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
                          <Image src="/static/images/icons/gears.png" alt="" width={67} height={65}/>
                        </div>
                          <h4 data-aos="fade-up">Venture Building</h4>
                          <p data-aos="fade-up">
                              We provide high-performance white-label full-fledged exchange solutions within 2 weeks. Build your brand with our state-of-the-art technology, highly secured platform and highly customized to suit your business objectives.
                              {/* <!--<br /><br />Our robust platform ensures scalability and execution of orders in real time. Our portfolio of clients have garnered over 10,000 users on their platforms.-->
                              <!--Learn more about our exchange solutions <a href="exchange.html">here</a>. --> */}
                          </p>

                      </div>

                      <div className="col-xl-6 col-lg-6 pt-5 pt-lg-0">
                      <div data-aos="fade-up" className="img-fluid afg-icon">
                            <Image src="/static/images/icons/investments.png" alt="" width={75} height={65}/>
                          </div>
                          <h4 data-aos="fade-up">Venture Acceleration</h4>
                          <p data-aos="fade-up">
                              We believe in a founder-first philosophy, investing in dedicated founding teams that will go on to create disruptive products and services across industries. Fiercely committed to honing world-class innovations, we grow with companies through the stages of development.
                              {/* <!-- <br /><br />Our intimate understanding of business needs stems from the hybrid nature of Asia Focus Group as a venture builder, venture capital and incubator.--> */}
                          </p>

                      </div>

                      <div className="col-xl-6 col-lg-6 pt-5 pt-lg-0">
                      <div data-aos="fade-up" className="img-fluid afg-icon">
                            <Image src="/static/images/icons/consultancy.png" alt="" width={65} height={65}/>
                          </div>
                          <h4 data-aos="fade-up">Consultancy</h4>
                          <p data-aos="fade-up">
                              Established companies can draw on the network and expertise of Asia Focus Group to revitalise their products and services. This includes strategic counsel on M&A and restructuring, as well as leveraging competencies in e-commerce, retail, F&B and technology.<br /><br />Companies will benefit from the vast human, financial and technological capital that thrives of Asia Focus Group.
                          </p>

                      </div>

                      <div className="col-xl-6 col-lg-6 pt-5 pt-lg-0">
                      <div data-aos="fade-up" className="img-fluid afg-icon">
                            <Image src="/static/images/icons/talent-acquisition.png" alt="" width={72} height={65}/>
                          </div>
                          <h4 data-aos="fade-up">Talent Acquisition</h4>
                          <p data-aos="fade-up">
                              As a new age company, Asia Focus Group understands the importance of talent not only in Finance but also in other business aspects like Marketing and Operations. We believe that teams can shape products and services, and therefore provide manpower sourcing for companies. <br /><br />Clients can tap into our network and extended subsidiaries to convert top-tier talent in technology, retail and related industries.
                          </p>

                      </div>

                  </div>
              </div>
          </section>



        


      </main>
    </>
  )
} 