/* eslint-disable no-unreachable */
import React from "react";
import { Link } from 'react-scroll';


class Home extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {menuToogle:false};
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({menuToogle:!this.state.menuToogle});
    }
    render() {
        
        return (
            <div>
                <header className="main-header nav-down">
                    <div className="inner main-header__inner">
                        <div className="row">
                            <div className="site-logo"><a href="index.html"><img src="/images/rgtrewgt.png" alt="Site Logo" /></a></div>
                            <div className="navigation">
                                <div id="nav-btn" className={`nav-btn ${this.state.menuToogle ? "open" : ""}`} onClick={this.handleSubmit}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <nav id="main-nav" className={`main-nav ${this.state.menuToogle ? "open" : ""}`} >
                                    <ul>
                                        <li><Link activeClass="active" to="theStory" spy={true} smooth={true} duration={1000} >Story</Link></li>          
                                        <li><Link activeClass="active" to="roadMap" spy={true} smooth={true} duration={1000}>Roadmap</Link></li>          
                                        <li><Link activeClass="active" to="grubs" spy={true} smooth={true} duration={1000}>$grubs</Link></li>          
                                        <li><Link activeClass="active" to="theTeam" spy={true} smooth={true} duration={1000}>Team</Link></li>          
                                        <li><Link activeClass="active" to="faqs" spy={true} smooth={true} duration={1000}>Faq</Link></li>          
                                        
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                <div id="main" className="">
                    <section id="hero" className="hero">
                        <div className="inner hero__inner">
                            <h2 className="section-title" data-aos="fade-out-custom" data-aos-easing="new-easing">THE BIGGEST DAO OF ALL <br/>TIME IS HERE!</h2>
                            <div className="image-btn">
                                <img src="/images/gg1dd.png" alt="fox-image"/>
                                <div className="btn-wrap">
                                    <a href="#" className="button button-ex-large">Mint</a>
                                </div>
                            </div>
                            <div className="social-links">
                                <a href="#"><img src="/images/icons/twitter.webp" alt="twitter-icon" /></a>
                                <a href="#"><img src="/images/icons/discord.webp" alt="discrod-icon" /></a>
                            </div>
                        </div>
                        <div className="info-bar">
                            <div className="inner info-bar__content">
                                <p>The NFT Jungle will never look the same again...</p>
                            </div>
                        </div>
                    </section>
                    <section id="theStory" className="story">
                        <div className="inner story__inner">
                            <h2 className="section-title" data-aos="fade-out-custom" data-aos-easing="new-easing">The Story</h2>
                            <p>In a world not so far away the council of Elder Meerkats have declared enough is enough. Too long have they stood aside while the jungle has been overrun with Apes, Lions, Toads &amp; Cats! It is time for the Mighty Meerkats to set order and ensure the jungle returns back into balance. The Mighty Meerkat army has assembled with 10,000 strong warriors. <strong>The jungle is about to change forever!</strong></p>
                        </div>
                    </section>
                    <section id="warChest" className="war-chest">
                        <div className="inner war-chest__inner">
                            <h2 className="section-title" data-aos="fade-out-custom" data-aos-easing="new-easing">The War Chest <br/><u>1000</u> Eth DAO</h2>
                            <p>The 1000 Eth War Chest will be provided by a 0.1 mint to conquer the NFT landscape. 100% of the Mint will be deposited in the DAO.</p>
                            <p>This biggest ever DAO will purchase and fractionalize valuable blue chip NFTs including but not limited to; Kongzs, Bored Apes, Fidenzas, CryptoPunks, Cool Cats and more! These will be distributed to its members. A royalty of 7.5% will keep funding the DAO for more and more purchases.</p>
                            <p>Once you join the Mighty Meerkat Army you gain access to the exclusive DAO community with the ability to vote on important Meerkat matters, such as decisions on DAO purchases!</p>

                        </div>
                    </section>
                    <section id="grubs" className="grubs">
                        <div className="inner grubs__inner">
                            <h2 className="section-title" data-aos="fade-out-custom" data-aos-easing="new-easing">$GRUBS &amp; The Ecosystem</h2>
                            <p>Utility tokens, named $GRUBS, will represent fractional ownership of purchases held in the burrow vault. $GRUBS will be the lifeblood of the Mighty Meerkat ecosystem. $GRUBS are NOT an investment and have NO economic value.</p>
                            <img src="/images/wfwef.png" alt="Worm Image" /> 
                        </div>
                    </section>
                    <section id="roadMap" className="roadmap">
                        <div className="inner roadmap__inner">
                            <h2 className="section-title" data-aos="fade-out-custom" data-aos-easing="new-easing">The Road Map</h2>

                            <div className="stages">
                                <div className="stage stage1">
                                    <h3 className="stage__title" data-aos="fade-out-custom" data-aos-easing="new-easing">
                                        Stage 1
                                    </h3>
                                    <ul>
                                        <li>Sell out of primary collection.</li>
                                        <li>Begin blue-chip purchase war path - Genesis Kong, CryptoPunk, Fidenza, Cool Cats &amp; many more as voted by the DAO.</li>
                                        <li>Rally the Meerkat army - purchase large community projects voted on by the Meerkat Community.</li>
                                        <li>Fund &amp; Implement staking with $GRUBS ecosystem. </li>
                                    </ul>
                                </div>
                                <div className="stage stage2">
                                    <h3 className="stage__title" data-aos="fade-out-custom" data-aos-easing="new-easing">
                                        Stage 2
                                    </h3>
                                    <ul>
                                        <li>Launch Pad Accelerator implemented with token burn utility.</li>
                                        <li>Alpha Jungle Channel access for all holders.</li>
                                        <li>Merchandise store created.</li>
                                        <li>Burrows &amp; Venom released for mutation or breeding that require token burning.</li>
                                        <li>What will evolve? What rewards await? All will be revealed soon.</li>
                                    </ul>
                                </div>
                                <div className="stage stage3">
                                    <h3 className="stage__title aos-init" data-aos="fade-out-custom" data-aos-easing="new-easing">
                                        Stage 3
                                    </h3>
                                    <ul>
                                        <li>VX avatars for Mighty Meerkats.</li>
                                        <li>Sandbox Purchase.</li>
                                        <li>Meerkat Manor is created.</li>
                                        <li>Treasure hunt launched. </li>
                                        <li>Next three stages announced.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="theTeam" className="team">
                        <div className="inner team__inner">
                            <h2 className="section-title aos-init" data-aos="fade-out-custom" data-aos-easing="new-easing">The Team</h2>
                            <div className="row">
                                <div className="team-member">
                                    <div className="team-member__inner">
                                        <h3 className="team-member__title">Founder</h3>
                                        <img src="/images/founder.png" alt="founder image"/>
                                        <a href="#" className="team-member__url">@NFTEINSTEIN</a>
                                    </div>
                                </div>
                                <div className="team-member">
                                    <div className="team-member__inner">
                                        <h3 className="team-member__title">Developer</h3>
                                        <img src="../images/developer.png" alt="Developer image" />
                                        <a href="#" className="team-member__url">THE WIZARD</a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="team-member">
                                    <div className="team-member__inner">
                                        <h3 className="team-member__title">Head Mod</h3>
                                        <img src="/images/head-mod.png" alt="Head Mod image" />
                                        <a href="#" className="team-member__url">BZ#5932</a>
                                    </div>
                                </div>
                                <div className="team-member">
                                    <div className="team-member__inner">
                                        <h3 className="team-member__title">Artist</h3>
                                        <img src="/images/artist.png" alt="Artist image"/>
                                        <a href="#" className="team-member__url">Leonardo da Meerkat</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="faqs" className="faqs">
                        <div className="inner faqs__inner">
                            <h2 className="section-title aos-init" data-aos="fade-out-custom" data-aos-easing="new-easing">
                                Faq
                            </h2>
                            <div className="faq">
                                <h3 className="faq__title">What is minting?</h3>
                                <p>Minting is the process in which you can 'mint' any new NFT collection for the first time. This essentially means you will be the first recorded person on the blockchain to own that specific NFT.</p>
                                <p>The action itself is a simple process. You must have the right amount of ETH in your wallet to cover the mint fee and 'gas fees'. You can mint directly from this website when the project has launched or send the correct amount of ETH to the NFT's “Smart Contract”. The Mighty Meerkat's smart contract is limited to 10,000 Meerkats!</p>
                            </div>
                            <div className="faq">
                                <h3 className="faq__title">Can I sell my Mighty Meerkat NFT?</h3>
                                <p>Of course! Your NFT can be traded freely if you are the owner and only incurs Ethereum transaction fees (gas fees). However, the most common way to sell your NFT is through trusted marketplaces, such as OpenSea. OpenSea is the largest and most trusted marketplace in the NFT world! Please keep in mind trading on OpenSea involves additional fees for the seller.</p>
                            </div>
                            <div className="faq">
                                <h3 className="faq__title">If I have missed the mint how can I purchase?</h3>
                                <p>Please visit the OpenSea link that will be provided on this website to access the collection on the OpenSea marketplace. Once in OpenSea you can buy or sell NFTs from this collection.</p>
                            </div>
                            <div className="faq">
                                <h3 className="faq__title">Why is the team contributing 100% of the mint to the DAO?</h3>
                                <p>The team from the onset set out to build an amazing community project with long term goals and objectives. Royalty shares, of 2.5% from secondary sales, will provide the team with enough incentive to keep growing the project into the future!</p>
                            </div>
                            <div className="faq">
                                <h3 className="faq__title">How do I contact someone for support or help?</h3>
                                <p>Please visit our discord: <a href="https://discord.gg/mightymeerkats" target="_blank">https://discord.gg/mightymeerkats</a></p>
                            </div>
                        </div>
                    </section>
		        </div>
                <footer id="footer">
                    <div class="inner">
                        <div class="row">
                            <div></div>
                            <div class="footer-info">
                                <p>DISCLAIMER:</p>
                                <p class="coptyright">© 2021 Mighty Meerkats</p>
                            </div>
                            <div class="social">
                                <a href="#" class="social-link"><img src="/images/icons/twitter-light.webp" alt="twitter icon"/></a>
                                <a href="#" class="social-link"><img src="/images/icons/discord-light.webp" alt="discord icon"/></a>
                                <a href="#" class="social-link"><img src="/images/icons/instagram-light.webp" alt="instagram icon"/></a>
                            </div>
                        </div>
                    </div>
		        </footer>
            </div>
            
        );
    }
}

export default Home;