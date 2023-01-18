import {BsCart2 , BsHandbag , BsPerson , BsArrowLeftShort ,BsGeoAlt,BsWhatsapp , BsInstagram , BsTwitter} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Home.css'

const Home = () => {
    

    return(
        <div className='HomeContainer'>
            <header className='header'>
                <Link to='/' className='nav'>
                    <h1>MiloSen</h1>
                    <small>.Brand</small>
                </Link>
                <div className='navicons'>
                    <Link to='/Login'>
                        <div>
                            <BsPerson/>
                        </div>
                    </Link>
                    <Link to='/Shop'>
                        <div>
                            <BsHandbag/>
                        </div>
                    </Link>
                    <Link to='/Basket'>
                        <div>
                            <BsCart2/>
                        </div>
                    </Link>
                    <div className='menu-bar'>
                        <div className='menu'>
                            <BsArrowLeftShort/>
                        </div>
                        <div class="menu-item">
                            <a href="#pop">Popular</a>
                        </div>
                        <div class="menu-item">
                            <a href="#charm">Charming</a>
                        </div>
                        <div class="menu-item">
                            <a href="#top">Top Outfits</a>
                        </div>
                        <div className='menu-item'>
                            <a href="#autumn">Back to Autumn</a>
                        </div>
                        <div class="menu-item">
                            <a href="#accessory">Accessories</a>
                        </div>
                    </div>
                </div>
            </header>
            <main className='main'>
                <div className='chapter-one'>
                    <div>
                        <svg className='svgeffect'>
                            <text x={'10px'} y={'40px'}>
                                A Popular Worldwide Boys
                                <tspan x={'200px'} y={'120px'}>
                                    Fashion
                                </tspan>
                            </text>
                        </svg>
                    </div>
                    <img src="./src/Media/Photos/photo_2022-07-26_20-58-59.jpg"/>
                </div>
                <div id='pop'></div>
                <div className='chapter-two'>
                    <p>Popular</p>
                    <div className='slideshow-one'>
                        <div className='img-slide'>
                            <img src="./src/Media/Photos/Popular/photo_2022-07-30_19-33-29.jpg"/>
                            <img src="./src/Media/Photos/Popular/photo_2022-07-30_19-33-39.jpg"/>
                            <img src="./src/Media/Photos/Popular/photo_2022-07-30_19-35-22.jpg"/>
                        </div>
                        <div className='img-sec-slide'>
                            <img src="./src/Media/Photos/Popular/photo_2022-07-30_19-33-51.jpg"/>
                            <img src="./src/Media/Photos/Popular/photo_2022-07-30_19-33-56.jpg"/>
                            <img src="./src/Media/Photos/Popular/photo_2022-07-30_19-33-43.jpg"/>
                        </div>
                    </div>
                </div>
                <dir id='charm'></dir>
                <div className='chapter-three'>
                    <p>Charming</p>
                    <div className='slideshow-two'>
                        <div className='sec-img-slide'>
                            <img src="./src/Media/Photos/Charming/photo_2022-07-27_03-32-34.jpg"/>
                            <img src="./src/Media/Photos/Charming/photo_2022-07-30_19-33-35.jpg"/>
                            <img src="./src/Media/Photos/Charming/photo_2022-07-30_19-33-47.jpg"/>
                            <img src="./src/Media/Photos/Charming/photo_2022-07-30_19-35-16.jpg"/>
                        </div>
                        <div className='sec-img-slide'>
                            <img src="./src/Media/Photos/Charming/photo_2022-07-30_19-35-19.jpg"/>
                            <img src="./src/Media/Photos/Charming/photo_2022-07-30_19-35-26.jpg"/>
                            <img src="./src/Media/Photos/Charming/photo_2022-07-30_19-35-29.jpg"/>
                            <img src="./src/Media/Photos/Charming/photo_2022-07-30_19-35-33.jpg"/>
                        </div>
                    </div>
                </div>
                <div id='top'></div>
                <div className='chapter-four'>
                    <p>Top Outfits</p>
                    <div className='slideshow-three'>
                        <img src="./src/Media/Photos/Top set's/20220730_212532.jpg"/>
                        <img src="./src/Media/Photos/Top set's/20220730_212453.jpg"/>
                        <img src="./src/Media/Photos/Top set's/20220730_212427.jpg"/>
                        <img src="./src/Media/Photos/Top set's/IMG_20220730_212315_169.jpg"/>
                        <img src="./src/Media/Photos/Top set's/20220730_212511.jpg"/>
                    </div>
                </div>
                <div className='chapter-five'>
                    <div className='slideshow-four'>
                        <img src="./src/Media/Photos/Choose best foru/photo_2022-07-26_21-00-54.jpg"/>
                        <img src="./src/Media/Photos/Choose best foru/photo_2022-07-26_21-01-06.jpg"/>
                        <img src="./src/Media/Photos/Choose best foru/photo_2022-07-26_21-01-07.jpg"/>
                        <img src="./src/Media/Photos/Choose best foru/photo_2022-07-26_21-01-12.jpg"/>
                        <img src="./src/Media/Photos/Choose best foru/photo_2022-07-26_21-01-15.jpg"/>
                    </div>
                    <p>Choose What is Best <br/> for you</p>
                </div>
                <div id='autumn'></div>
                <div className='chapter-six'>
                    <p>Back to Autumn</p>
                    <div className='grid-container'>
                        <div className='grid'>
                            <img src="./src/Media/Photos/Grid/photo_2022-08-04_22-24-12.jpg"/>
                            <img src="./src/Media/Photos/Grid/photo_2022-08-04_22-26-07.jpg"/>
                            <img src="./src/Media/Photos/Grid/photo_2022-08-04_22-24-20.jpg"/>
                            <img src="./src/Media/Photos/Grid/photo_2022-08-04_22-25-52.jpg"/>
                        </div>
                        <video autoPlay loop muted>
                            <source src='./src/Media/Video/280108298_1115251455998319_1008186556470924616_n.mp4' type='video/mp4'/>
                        </video>
                        <div className='grid'>
                            <img src="./src/Media/Photos/Grid/photo_2022-07-27_03-32-41.jpg"/>
                            <img src="./src/Media/Photos/Grid/photo_2022-07-27_03-32-43.jpg"/>
                            <img src="./src/Media/Photos/Grid/photo_2022-07-27_03-32-46.jpg"/>
                            <img src="./src/Media/Photos/Grid/photo_2022-07-27_03-32-44.jpg"/>
                        </div>
                    </div>
                </div>
                <div id='accessory'></div>
                <div className='chapter-sev'>
                    <p>Accessory</p>
                    <div className='slideshow-two'>
                        <div className='sec-img-slide'>
                            <img src="./src/Media/photos/Accessory/photo_2022-07-30_19-34-58.jpg"/>
                            <img src="./src/Media/photos/Accessory/photo_2022-07-30_19-34-24.jpg"/>
                            <img src="./src/Media/photos/Accessory/photo_2022-07-30_19-34-31.jpg"/>
                            <img src="./src/Media/photos/Accessory/photo_2022-07-30_19-34-36.jpg"/>
                        </div>
                        <div className='sec-img-slide'>
                            <img src="./src/Media/photos/Accessory/photo_2022-07-30_19-34-39.jpg"/>
                            <img src="./src/Media/photos/Accessory/photo_2022-07-30_19-34-45.jpg"/>
                            <img src="./src/Media/photos/Accessory/photo_2022-07-30_19-34-50.jpg"/>
                            <img src="./src/Media/photos/Accessory/photo_2022-07-30_19-35-05.jpg"/>
                        </div>
                    </div>
                </div>
            </main>
            <footer className='footer'>
                <div className='footer-contact'>
                    <div className='footer-title'>
                        <p>Milosen</p>
                        <small>.Brand</small>
                    </div>
                    <div className='footer-btn'>
                        <a href="https://t.me/MiloWinchester">
                            <button>
                                <FaTelegramPlane/>
                            </button>
                        </a>
                        <a href="https://instagram.com/millowinchester?igshid=YmMyMTA2M2Y=">
                            <button>
                                <BsInstagram/>
                            </button>
                        </a>
                        <a href="https://twitter.com/Meta_Milo?s=09">
                            <button>
                                <BsTwitter/>
                            </button>
                        </a>
                        <a href="https://wa.me/qr/QCKI6OE4EIRTE1">
                            <button>
                                <BsWhatsapp/>
                            </button>
                        </a>
                    </div>
                </div>
                <div>
                    <div className='footer-info'>
                        <div className='footer-loca'>
                            <div>
                                <BsGeoAlt/> <p>United States / Canada</p>
                            </div>
                            <p>© 2022 MiloSen, Inc. All Rights Reserved</p>
                        </div>
                        <div className='footer-links'>
                            <p>Terms of Sale</p>
                            <p>Terms of Use</p>
                            <p>MiloSen Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home