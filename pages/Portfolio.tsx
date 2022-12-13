import Link from "next/link"
import Image from "next/image"
export default function Portfolio() {
  const stylePortfolio = {
    letterSpacing: "4.7px",
  }
  return (
    <>
      <section id="portfolio" className="portfolio">
        <div className="container">

            <div className="row">
                <div className="col-xl-7 col-lg-7 pt-lg-0" data-aos="fade-up">
                    <h5 style={stylePortfolio}>portfolio</h5>
                    <br />
                    <h1>Investment Portfolio</h1>

                </div>
            </div>

            {/* @*<div className="row pt-5" data-aos="fade-up">
                <div className="col-xl-6 col-lg-6 pt-5 pt-lg-0">
                    <a href="https://www.consentium.net/" target="_blank"><img src="/assets/img/logos/consentium.png" className="img-fluid afg-icon"/></a>
                    <h5>
                        <a href="https://www.consentium.net/" target="_blank">consentium.net</a>
                        <br />singapore
                        <br />multi-featured Chat App
                    </h5>

                </div>

                <div className="col-xl-5 col-lg-5 pt-5 pt-lg-0">
                    <p>
                        Consentium is one of its kind ecosystem that offers a multi-featured chat application.
                        <br /><br />
                        The vision at Consentium is to transcend simplistic chat applications and develop a sustainable future-proof application that can serve to host core groups, businesses and propagate real-world communities. Thus, it aims to become a cutting-edge community-building platform.
                    </p>

                </div>
            </div>*@
            @*<div className="row pt-5" data-aos="fade-up">
                <div className="col-xl-6 col-lg-6 pt-5 pt-lg-0">
                    <a href="https://www.exonium.one/" target="_blank"><img src="/assets/img/logos/exonium.png" className="img-fluid afg-icon"></img></a>
                    <h5>
                        <a href="https://www.exonium.one/" target="_blank">exonium.one</a>
                        <br />Estonia
                        <br />Exchange<br />& P2P Platform
                    </h5>
                </div>
                <div className="col-xl-5 col-lg-5 pt-5 pt-lg-0">
                    <p>
                        Exonium is a simple, fast, stable and secure platform to exchange digital assets. This cutting-edge exchange platform makes payments and investing easy and safe across the globe. It ensures access to the top twenty digital assets while maintaining security and liquidity.<br /><br />Exonium also enables ultra-high-speed transactions, and that too at zero or minimal fees. The absolutely user-friendly interface and dynamic market trading views make Exonium one of its kind in the market.
                    </p>
                </div>
            </div>*@
            @*<div className="row pt-5" data-aos="fade-up">
                <div className="col-xl-6 col-lg-6 pt-5 pt-lg-0">
                    <a href="https://www.beowulfchain.com/" target="_blank"><img src="/assets/img/logos/beowulf.png" className="img-fluid afg-icon"/></a>
                    <h5>
                        <a href="https://www.beowulfchain.com/" target="_blank">beowulfchain.com</a>
                        <br />San Jose, CA, USA
                        <br />Decentralized Cloud Network<br />for Communication Services
                    </h5>

                </div>

                <div className="col-xl-5 col-lg-5 pt-5 pt-lg-0">
                    <p>
                        Beowulf is a B2B platform providing best-in-class communication services with infinite scalability across the globe. With the mission of facilitating secure, best-in-class communications, Beowulf provides a suite of services to help businesses reach a wider audience with no upfront investment needed, and the lowest possible cost using transparent pay-per-use rates.
                    </p>
                    <p style="line-height:2;">
                        <div style="margin-top:10px;">
                            <b>Press Releases :-</b>
                        </div>
                        <div style="margin-top:10px;">
                            <b>TECH IN ASIA:</b>
                            <br />
                            <a href="https://www.techinasia.com/beowulf-secures-backing-consentium-mars-blockchain" target="_blank">techinasia.com/beowulf-secures-backing-consentium-mars-blockchain</a>
                        </div>
                        <div style="margin-top:15px;">
                            <b>Deal Street Asia:</b>
                            <br /> <a href="https://www.dealstreetasia.com/stories/consentium-mars-blockchain-144907/" target="_blank">dealstreetasia.com/stories/consentium-mars-blockchain-144907/</a>
                        </div>
                        <div style="margin-top:15px;">
                            <b>Tracxn:</b>
                            <br /> <a href="https://tracxn.com/d/companies/beowulfchain.com" target="_blank">tracxn.com/d/companies/beowulfchain.com</a>
                        </div>
                    </p>
                </div>
            </div>*@ */}
            {/* <!-- <div className="row pt-5" data-aos="fade-up">
          <div className="col-xl-6 col-lg-6 pt-5 pt-lg-0">
            <a href="https://www.linktrixmanpower.com/" target="_blank"><img src="/assets/img/logos/linktrix.png" className="img-fluid afg-icon"></img></a>
            <h5 >
              <a href="https://www.linktrixmanpower.com/" target="_blank">linktrixmanpower.com</a>
              <br/>Bangkok, Thailand
              <br/>Recruitment Consultancy
            </h5>

          </div>

          <div className="col-xl-5 col-lg-5 pt-5 pt-lg-0">
            <p>
              Linktrix Manpower (Thailand) Co.Ltd is a leading recruitment consultancy, catering to the staffing requirement of organizations of different size, across various industries.
            </p>

          </div>

        </div>--> */}
            <div className="row pt-5" data-aos="fade-up">
                <div className="col-xl-6 col-lg-6 pt-5 pt-lg-0">
                    <Link  href="https://www.timelesspharma.com/" target="_blank">
                      <div className="img-fluid afg-icon">
                      <Image src="/static/images/logos/timeless.png" alt="" width={120} height={20}/>
                      </div>
                      </Link >
                    <h5>
                        <Link  href="https://www.timelesspharma.com/" target="_blank">timelesspharma.com</Link >
                        <br />singapore
                        <br />Skincare & Health
                    </h5>
                </div>

                <div className="col-xl-5 col-lg-5 pt-5 pt-lg-0">
                    <p>
                        Since 2014, Timeless has been crafting a range of products, designed to enhance your physical health. It has been an endless journey of bringing out the best-in-class and purely natural ingredients for their products.
                    </p>
                </div>
            </div>
            {/* @*<div className="row pt-5" data-aos="fade-up">
                <div className="col-xl-6 col-lg-6 pt-5 pt-lg-0">
                    <a href="https://www.coinjax.com/" target="_blank"><img src="/assets/img/logos/coinjax.png" className="img-fluid afg-icon" /></a>
                    <h5>
                        <a href="https://www.coinjax.com/" target="_blank">coinjax.com</a>
                        <br />Singapore
                        <br />Cutting Edge and<br />Secure Exchange
                    </h5>
                </div>
                <div className="col-xl-5 col-lg-5 pt-5 pt-lg-0">
                    <p>
                        Coinjax will be a unified enterprise solution to manage in a highly secure manner for all blockchain deployments across any enterprise so that ease of management and visibility of blockchain assets with tidy architecture. Stay tuned!
                    </p>
                </div>
            </div>
            <div className="row pt-5" data-aos="fade-up">
                <div className="col-xl-6 col-lg-6 pt-5 pt-lg-0">
                    <a href="https://arionstable.com/" target="_blank"><img src="/assets/img/logos/arionstable_logo_dark.png" className="img-fluid afg-icon" /></a>
                    <h5>
                        <a href="https://arionstable.com/" target="_blank">arionstable.com</a>
                        <br />Singapore
                        <br />Horse Trading
                    </h5>
                </div>
                <div className="col-xl-5 col-lg-5 pt-5 pt-lg-0">
                    <p>
                        Arion Stable is a blockchain-based trading platform dedicated to helping traders reach their desired goals and broaden their financial horizons through the horse racing industry.
                        <br/>
                        Rather than just a single race, opportunities exist in the horses themselves.
                    </p>
                </div>
            </div>*@
            <!--<div className="row pt-5" data-aos="fade-up">
          <div className="col-xl-6 col-lg-6 pt-5 pt-lg-0">
            <a href="https://www.askbrains.com/" target="_blank"><img src="/assets/img/logos/askbrains.png" className="img-fluid afg-icon2"></img></a>
            <h5 >
              <a href="https://www.askbrains.com/" target="_blank">askbrains.com</a>
              <br/>Singapore
              <br/>AI-driven Expert Services<br/>and Mentorship Platform
            </h5>

          </div>

          <div className="col-xl-5 col-lg-5 pt-5 pt-lg-0">
            <p >
              AskBrains brings together leading mentors and business experts from across the globe and matches them with entrepreneurs and businesses that look for assistance. With its fast cross-border payments and affordable rates, AskBrains offers a new format of an expert network.<br/><br/>A state-of-the-art AI scoring and matching system ensures that project teams get exactly the help they need – be it legal, cyber security, bis dev, guerrilla marketing, or finance.
            </p>

          </div>
        </div>--> */}
            {/* @*<div className="row pt-5" data-aos="fade-up">
                <div className="col-xl-6 col-lg-6 pt-5 pt-lg-0">
                    <a href="https://www.blazeprotocol.io/" target="_blank"><img src="/assets/img/logos/blaze.png" className="img-fluid afg-icon"></img></a>
                    <h5>
                        <a href="https://www.blazeprotocol.io/" target="_blank">blazeprotocol.io</a>
                        <br />India
                        <br />New-Age Multi-<br />Dimensional Ledger
                    </h5>
                </div>
                <div className="col-xl-5 col-lg-5 pt-5 pt-lg-0">
                    <p>
                        Blaze is a first of its kind block-lattice protocol designed for the ever-expanding needs of the digital industry. Its unique infrastructure offers three advantages: making the governance effortless, improving the transaction processing speed and reducing bloat.<br /><br />The protocol has been designed to be robust and secure to support mission-critical applications. At the same time, it is flexible and resilient to keep up with the ever-changing needs of the industry. Moreover, Blaze is a platform where businesses can set up their own isolated ecosystem without worrying about the security or a need to code.<br /><br />With features like lightweight smart contracts, smart transactions, built-in voting, messaging and more - Blaze ensures that the businesses transition fluently into the next era of technology.
                    </p>
                </div>
            </div>*@ */}
            {/* <!-- <div className="row pt-5" data-aos="fade-up">
          <div className="col-xl-6 col-lg-6 pt-5 pt-lg-0">
            <a href="https://www.thecultagency.co/" target="_blank"><img src="/assets/img/logos/thecult.png" className="img-fluid afg-icon2"></img></a>
            <h5 >
              <a href="https://www.thecultagency.co/" target="_blank">thecultagency.co</a>
              <br/>Singapore
              <br/>Boutique Advertising Agency
            </h5>
          </div>
          <div className="col-xl-5 col-lg-5 pt-5 pt-lg-0">
            <p>
              As integrated marketing specialists, The Cult crafts 360˚ campaigns that disrupt the status quo and build lasting brands that stand out from the crowd, specialising in Branding & Visual Identity, 360˚ Creative Campaigns, Graphic Design, Web Design, Digital Marketing, Content Marketing, Media Buy and Events Management.
            </p>
          </div>
        </div>--> */}
        </div>
    </section>
    </>
  )
} 