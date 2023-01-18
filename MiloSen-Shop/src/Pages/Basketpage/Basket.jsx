import { useState } from 'react'
import {BsHouse , BsPerson , BsHandbag, BsArrowRight ,BsGeoAlt,BsWhatsapp , BsInstagram , BsTwitter} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Basketcards from '../../Components/BasketCards/BasketCards'
import Productcards from '../../Components/ProductCards/ProductCards'
import ProductPage from '../Productpage/Product'
import './Basket.css'

const Basket = () => {

    const [basketlist , setbasketlist] = useState([])

    {<Productcards
        basketlist = {basketlist}
        setbasketlist = {setbasketlist}
    />}
    

    return(
        <div className='basket-container'>
           <header className='header'>
                <Link to='/' className='nav'>
                    <h1>MiloSen</h1>
                    <small>.Brand</small>
                </Link>
                <div className='navicons'>
                    <div onClick={() => window.history.go(-1)}>
                        <BsArrowRight/>
                    </div>
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
                    <Link to='/'>
                        <div>
                            <BsHouse/>
                        </div>
                    </Link>
                </div>
            </header>
            <main className='basket-main'>
               <div className='basketlist'>
                    <Basketcards
                        basketlist = {basketlist}
                        setbasketlist = {setbasketlist}
                    />
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

export default Basket