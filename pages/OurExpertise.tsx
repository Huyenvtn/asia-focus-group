export default function OurExpertise() {
  const mystyle = {
    fontSize:"6rem",
  };
  const serviceStyle = {
    paddingTop:"100px",
  }
  return (
    <>
      <section id="about-hero" className="d-flex flex-column justify-content-center align-items-center" /*style="height: 90vh;"*/>
        <div className="container">
            <div className="row">
                <div className="col-12 pt-5 pt-lg-0 text-center">
                    <h1 className="font-weight-bolder" style={mystyle} data-aos="fade-up">Our Expertise</h1>
                </div>
                {/* @*<div className="col-xl-7 col-lg-7 pt-5 pt-lg-0">
                    <p data-aos="fade-up" data-aos-delay="500" style="font-size:1.5rem;text-transform:uppercase;line-height:2;vertical-align:middle;">
                      
                        Enterprise blockchain solutions &nbsp;&nbsp;<a href="#services" style="width:40px !important;height:40px !important;background: #C7BE95;color: #fff;display: inline;"><i className="icofont-simple-down" style="font-size: 24px;padding:5px;"></i></a><br />
                        Cryptocurrency exchange &nbsp;&nbsp;<a href="#services" style="width:40px !important;height:40px !important;background: #C7BE95;color: #fff;display: inline;"><i className="icofont-simple-down" style="font-size: 24px;padding:5px;"></i></a><br />
                        Token design &nbsp;&nbsp;<a href="#services" style="width:40px !important;height:40px !important;background: #C7BE95;color: #fff;display: inline;"><i className="icofont-simple-down" style="font-size: 24px;padding:5px;"></i></a><br />
                        DeFi &nbsp;&nbsp;<a href="#services" style="width:40px !important;height:40px !important;background: #C7BE95;color: #fff;display: inline;"><i className="icofont-simple-down" style="font-size: 24px;padding:5px;"></i></a><br />
                        Marketing &nbsp;&nbsp;<a href="#services" style="width:40px !important;height:40px !important;background: #C7BE95;color: #fff;display: inline;"><i className="icofont-simple-down" style="font-size: 24px;padding:5px;"></i></a><br />
                    </p>
                </div>*@ */}
            </div>
        </div>

    </section>

    <section id="services" className="services section-bg" style={serviceStyle}>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-6 d-flex align-items-stretch mb-5 mb-lg-0 aos-init aos-animate" data-aos="fade-up">
                    <div className="icon-box icon-box-pink" id="divtenterprise">
                        <div className="icon"><i className="bx bx-coin-stack"></i></div>
                        <h4 className="title"><a href="">Enterprise blockchain solutions</a></h4>
                        <p className="description">
                            Our technology team is able to built, deploy and customize white label blockchain solutions. With over 20 developers located all over the world, we are able to execute code and troubleshoot at lightning speed. Whether you are looking to build a permissioned or permissionless blockchain, or need oracles and smart contracts to be plugged into your business units, we will be able to build solutions catered exactly to your needs. Our developers are behind some of the most innovative advancements in the blockchain industry.
                        </p>
                    </div>
                </div>
                {/* @*<div className="col-md-6 col-lg-6 d-flex align-items-stretch mb-5 mb-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                    <div className="icon-box icon-box-cyan" id="divexchange">
                        <div className="icon"><i className="bx bxl-bitcoin"></i></div>
                        <h4 className="title"><a href="">Cryptocurrency exchange</a></h4>
                        <p className="description">
                            We have access to a full fledge end-to-end exchange solution for retail and institutions that require decentralised financial services. Built on a proprietary blockchain, you will have access to the technology stack of your cryptocurrency, which includes but is not limited to market making bots, KYC/AML modules, and top-notch security and user information encryption.
                        </p>
                    </div>
                </div>*@ */}
            
                <div className="col-md-6 col-lg-6 d-flex align-items-stretch mb-5 mb-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <div className="icon-box icon-box-green" id="divtokendesign">
                        <div className="icon"><i className="bx bx-coin"></i></div>
                        <h4 className="title"><a href="">Tokenomics</a></h4>
                        <p className="description">
                            With engineers, game theory experts, economists and mathematicians in our diverse consulting team, we have helped various projects design and implement various business models. Many of these projects have gone on to raise privately with both institutional and retail investors, and are doing well in the secondary market as well. Our in-house formula of tokenomics takes into account monetary and financial theory meets conventional wisdom of running enterprises ad investing best practices, which in turn creates robust and scalable tokenomics models.
                        </p>
                    </div>
                </div>
                {/* @*<div className="col-md-6 col-lg-6 d-flex align-items-stretch mb-5 mb-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                    <div className="icon-box icon-box-blue" id="divdefi">
                        <div className="icon"><i className="bx bx-user-plus"></i></div>
                        <h4 className="title"><a href="">DeFi</a></h4>
                        <p className="description">
                            We have help launched over 20 DeFi projects into the market so far. With DeFi, new age concepts such as yield farming and automated marketing presents a new opportunity for token projects to acquire customers, gain liquidity and execute fair token launches. Our technology team is behind some of the most innovative advancement in DeFi and our marketing team is at the forefront of DeFi marketing.
                        </p>
                    </div>
                </div>*@ */}
            </div>
            <div className="row  justify-content-center mt-4">
                <div className="col-md-6 col-lg-6 d-flex align-items-stretch mb-5 mb-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                    <div className="icon-box icon-box-cyan" id="divmarketing">
                        <div className="icon"><i className="bx bx-tv"></i></div>
                        <h4 className="title"><a href="">Marketing</a></h4>
                        <p className="description">
                            Community management, Public Relations, Marketing, Content Seeding, Influencer Engagement are just some of our key strengths in marketing. We are versed in marketing across various platforms (Telegram, Twitter, Reddit, Discord) as well as various regions around the world. We also conceptualize marketing campaigns such as trading campaigns, airdrops and bounties to allow our clients to achieve key milestones in their marketing targets. Our team is at the forefront of marketing, including the latest trends within the industry.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
} 