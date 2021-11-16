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
                            <div className="site-logo"><a href="index.html"><img src="/images/mighty.png" alt="Site Logo" /></a></div>
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
                                <a href="#" class="button button-primary">Connect Wallet</a>
                            </div>
                        </div>
                    </div>
                </header>
                <div id="main" className="">
                    <section id="hero" className="hero">
                        <div className="inner hero__inner">
                            <h2 className="section-title" data-aos="fade-out-custom" data-aos-easing="new-easing">THE BIGGEST DAO OF ALL <br/>TIME IS HERE!</h2>
                            <div className="image-btn">
                                <img src="/images/webb.gif" alt="fox-image"/>
                                <div className="btn-wrap">
                                    <a href="#" className="button button-ex-large">Mint</a>
                                </div>
                                <div class="inc-dec-form">
                                    <form autocomplete="off">
                                    <div class="value-button" id="decrease" value="Decrease Value">-</div>
                                    <input type="number" id="number" value="0" />
                                    <div class="value-button" id="increase" value="Increase Value">+</div>
                                    </form>
						        </div>
                            </div>
                            <div className="social-links">
                                <a href="https://twitter.com/mighty_meerkats"><img src="/images/icons/twitter.webp" alt="twitter-icon" /></a>
                                <a href="https://discord.com/invite/mightymeerkats"><img src="/images/icons/discord.webp" alt="discrod-icon" /></a>
                            </div>
                        </div>
                        <div className="info-bar">
			    <div className="utc-content">
			    <p>Pre-sale: 21/11/21 at 1pm UTC - Public sale at 2am UTC</p></div>
                            <div className="inner info-bar__content">
                                <p>The NFT Jungle will never look the same again...</p>
                            </div>
                        </div>
                    </section>
                    <section id="theStory" className="story">
                        <div className="inner story__inner">
                            <h2 className="section-title" data-aos="fade-out-custom" data-aos-easing="new-easing">The Story</h2>
                            <p>In a world not so far away the council of Elder Meerkats have declared enough is enough. Too long have they stood aside while the jungle has been overrun with Apes, Lions, Toads & Cats! It is time for the Mighty Meerkats to set order and ensure the jungle returns back into balance. The Mighty Meerkat army has assembled with 10,000 strong warriors. <strong>The jungle is about to change forever!</strong></p>
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
                                        <li>Buy a Genesis Kong during mint!</li>
                                        <li>Sell out of primary collection.</li>
                                        <li>Begin blue chip purchase war path - CryptoPunk, Fidenza, Cool Cats & many more as voted by the DAO.</li>
                                        <li>Rally the Meerkat Army - purchase large community projects voted on by the Meerkat Community. (non-blue-chips)</li>
                                        <li>Implement staking with $GRUBS ecosystem. </li>
                                    </ul>
                                </div>
                                <div className="stage stage2">
                                    <h3 className="stage__title" data-aos="fade-out-custom" data-aos-easing="new-easing">
                                        Stage 2
                                    </h3>
                                    <ul>
                                        <li>Fastest ever Launch Pad Accelerator implemented with token burn utility.</li>
                                        <li>Alpha Jungle Channel access for all holders.</li>
                                        <li>24/h NFT data request channel.</li>
                                        <li>Merchandise store created with token utility. </li>
                                        <li>Burrows &amp; Venom released for mutation or breeding that require token burning.</li>
                                        <li>Meerkat University - special access to online classes with respected experts in the NFT &amp; Crypto space. Open to non-holders who use $GRUBS. Also use $GRUBS for VIP classes/events.</li>
                                    </ul>
                                </div>
                                <div className="stage stage3">
                                    <h3 className="stage__title aos-init" data-aos="fade-out-custom" data-aos-easing="new-easing">
                                        Stage 3
                                    </h3>
				    <ul>
				    	<li>Hosting the first annual"Crypto Jungle Gala" which will be a cross project event featuring new NFT projects, special guest speakers & more! How to access this event? $GRUBS = your ticket in.</li>
					<li>VX avatars for Mighty Meerkats.</li>
					<li>Sandbox Purchase.</li>
					<li>Meerkat Manor is created with Metaverse ecosystem.</li>
					<li>Treasure hunt launched.</li>
					<li>Next stages to be announced.</li>
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
                                        <p><br/><br/>Hi everyone! I am the proud founder of Mighty Meerkats! You may know me as NFTEINSTEIN on Twitter or Mr Pickle from discord. The first question I often get asked is why do this project? My response is simple, why not! I have never in my life felt the power of community as strong as I have in the NFT space. What is happening in this space will go down in history as one of the biggest cultural movements. It would be my privilege to build something that gives back to the community that has given me so much. </p>
                                        <p>Some background on me:</p>
                                        <ul>
    <li>I live in Sydney, Australia - Aussie! Aussie! Aussie! </li>
    <li>I am an admitted solicitor.   </li>
    <li>I was the founder of one of the biggest tech platform launches in Australia with millions of dollars of free advertising generated from my marketing plan.</li>
    <li>I have extensive experience in building e-commerce businesses.
    </li>
    <li>I love building brands as much as I love NFTS!</li>
</ul>s
                                    </div>
                                </div>
                                <div className="team-member">
                                    <div className="team-member__inner">
                                        <h3 className="team-member__title">Developer</h3>
                                        <img src="../images/developer.png" alt="Developer image" />
                                        <a href="#" className="team-member__url">THE WIZARD</a>
                                        <p><br/><br/>A veteran developer! What the wizard can do with code is truly magical. The Wizard has a Masters of Computer Science and 4 years of experience in Solidity. The Wizard works professionally in DeFi where staking contracts holding millions of dollars have been deployed.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="team-member">
                                    <div className="team-member__inner">
                                        <h3 className="team-member__title">The Artist</h3>
                                        <img src="/images/artist.png" alt="Artist image"/>
                                        <a href="#" className="team-member__url">Leonardo da Meerkat</a>
                                        <p><br/><br/>Our artist and their team have extensive experience is designing quality projects that have succeeded in the NFT space. Our artist has done an amazing job with our artwork designing a truly unique collection that proudly stands out from the crowd.</p>
                                    </div>
                                </div>
                                <div className="team-member">
                                    <div className="team-member__inner">
                                        <h3 className="team-member__title">Head Mod</h3>
                                        <img src="/images/head-mod.png" alt="Head Mod image" />
                                        <a href="#" className="team-member__url">BZ#5932</a>
                                        <p><br/><br/>The personification of a top Aussie bloke! BZ has meerkat blood running through his veins! If you ever bump into him on discord ask him if he wants to hear a joke.</p>
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
                                <h3 className="faq__title">How to mint a Mighty Meerkat NFT?</h3>
                                <p>Anyone holding an early access pass will be able to mint up to 10 Meerkats at .1 each on Sunday 21/11/21 at 1pm UTC, they will have up until 1am UTC (12 hours) to mint.<u> Please use your one time access code that you will receive to access the website!</u> Then the collection will be available in a public sale at 2am UTC.</p>
                            	<p>Your NFT can then be traded freely if you are the owner and only incurs Ethereum transaction fees (gas fees). However, the most common way to sell your NFT is through trusted marketplaces, such as OpenSea. OpenSea is the largest and most trusted marketplace in the NFT world! Please keep in mind trading on OpenSea involves additional fees for the seller.</p>
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
                            <div className="faq-logo">
                                <img src="/images/rgtrewgt.png" alt="Site Logo" />
                                
                            </div>
                        

                        </div>
                    </section>
		        </div>
                <footer id="footer">
                    <div class="inner">
                        <div class="row">
                        <p class="disclamier">DISCLAIMER:</p>
                                <p class="footertext">
                                    Mighty Meerkats and the utility token $GRUBS is not an investment and has no economic value. Mighty Meerkat NFTs are exclusively and limited to being Non-Fungible Tokens for users to collect. There is no guarantee or promise that Mighty Meerkat NFTs hold any monetary value. Mighty Meerkats NFT does NOT distribute any form of royalty or dividend to its holders. Mighty Meerkats hereby grants you a worldwide, non-exclusive, personal, limited license, solely with respect to any Mighty Meerkat NFT(s) that you Own, to display the Artwork associated with such Mighty Meerkat NFT(s), privately or publicly, solely for personal, non-commercial purposes, including on social media platforms, digital galleries, or otherwise on the Internet or in association with your offer to sell or trade your Mighty Meerkat NFT(s). This license does not grant you any rights in or to the Artwork separate from the associated Mighty Meerkats NFT(s), only limited personal non-commercial use and resale rights in the NFT are granted and you have no right to license, commercially exploit, reproduce, distribute, prepare derivative works, or publicly perform. All copyright and other rights are reserved and not granted. You agree to waive any class action status and any legal dispute around the Mighty Meerkats NFT. You agree not to hold Mighty Meerkats NFT liable for any losses; including but not limited to any gas fees for failed transactions or any excessive gas fees during minting. You agree that Mighty Meerkats NFT will not be liable for any inability for you to access the Artwork for any reason, including as a result of any downtime, failure, obsolescence, removal, termination, or other disruption relating to (a) the servers upon which the Artwork is stored; (b) any Third-Party Vendor; or (c) any other NFT platform. You agree that you are over 18 years of age or the legal age required within your local jurisdiction. Your rights and remedies in the event of any legal action against Mighty Meerkats NFT or its creators are strictly limited to the right, if any, to recover damages in an action at law, and you acknowledge that your remedy of money damages is adequate. You will not be entitled by reason of any such breach, and you will not seek, any equitable relief, whether injunctive or otherwise. In the event of any legal dispute arising to Mighty Meerkats NFT you agree to only bring the case to a binding arbitration. You agree to be bound solely by the jurisdiction of the state of New South Wales, Australia. You agree that any legal proceedings you initiate can only be brought forward in  the jurisdiction of the state of New South Wales, Australia.
					</p>
                        </div>
                        <div class="row">
                            <div></div>
                            <div class="footer-info">
                                <p class="coptyright">© 2021 Mighty Meerkats</p>
                            </div>
                            <div class="social">
                                <a href="https://twitter.com/mighty_meerkats" class="social-link"><img src="/images/icons/twitter-light.webp" alt="twitter icon"/></a>
                                <a href="https://discord.com/invite/mightymeerkats" class="social-link"><img src="/images/icons/discord-light.webp" alt="discord icon"/></a>
                                <a href="https://www.instagram.com/MIGHTYMEERKATS/" class="social-link"><img src="/images/icons/instagram-light.webp" alt="instagram icon"/></a>
                            </div>
                        </div>
                    </div>
		        </footer>
            </div>
            
        );
    }
}

export default Home;
