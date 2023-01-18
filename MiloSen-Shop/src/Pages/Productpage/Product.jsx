import { useState } from 'react'
import {BsCart2 , BsPerson ,BsHouse , BsArrowRight ,BsGeoAlt,BsWhatsapp , BsInstagram , BsTwitter,
    BsChevronCompactRight,BsChevronCompactLeft} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Basket from '../../Components/BasketCards/BasketCards'
import Productcards from '../../Components/ProductCards/ProductCards'
import { FirstData } from '../../Product Data/firstdata'
import { SecData } from '../../Product Data/secdata'
import { ThirdData } from '../../Product Data/thirddata'
import './Product.css'

const ProductPage = (props) => {

    const [hoverbtn , sethoverbtn] = useState(false)
    const [sechoverbtn , setsechoverbtn] = useState(false)
    const [thirdhoverbtn , setthirdhoverbtn] = useState(false)


    return(
        <div className='shopcontainer'>
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
                    <Link to='/Basket'>
                        <div>
                            <BsCart2/>
                        </div>
                    </Link>
                    <Link to='/'>
                        <div>
                            <BsHouse/>
                        </div>
                    </Link>
                </div>
            </header>
            <main className='main'>
                <p className='shop-title'>
                    Products
                </p>
                <div className='card-container'>
                    <div className='shop-cards' onMouseOver={() => sethoverbtn(true)} onMouseOut={() => sethoverbtn(false)}>
                        {FirstData.map((item) => {
                            return(
                                <div key={`shoplist-${item.id}`}>
                                    <Productcards
                                    title= {item.title}
                                    img = {item.image}
                                    category = {item.category}
                                    rate = {item.rate}
                                    comment = {item.comment}
                                    price = {item.price}
                                    />
                                </div>
                            )
                        })}
                        <button className={`${hoverbtn ? 'prev-btn' : 'none-btn'}`}>
                            <BsChevronCompactLeft/>
                        </button>
                        <button className={`${hoverbtn ? 'next-btn' : 'none-btn'}`}>
                            <BsChevronCompactRight/>
                        </button>
                    </div>
                    <div className='shop-cards'  onMouseOver={() => setsechoverbtn(true)} onMouseOut={() => setsechoverbtn(false)}>
                        {SecData.map(item => {
                            return(
                                <div key={`sec-shoplist-${item.id}`}>
                                    <Productcards
                                    title= {item.title}
                                    img = {item.image}
                                    category = {item.category}
                                    rate = {item.rate}
                                    comment = {item.comment}
                                    price = {item.price}
                                    />
                                </div>
                            )
                        })}
                        <button className={`${sechoverbtn ? 'prev-btn' : 'none-btn'}`}>
                            <BsChevronCompactLeft/>
                        </button>
                        <button className={`${sechoverbtn ? 'next-btn' : 'none-btn'}`}>
                            <BsChevronCompactRight/>
                        </button>
                    </div>
                    <div className='shop-cards'   onMouseOver={() => setthirdhoverbtn(true)} onMouseOut={() => setthirdhoverbtn(false)}>
                        {ThirdData.map(item => {
                            return(
                                <div key={`third-shoplist-${item.id}`}>
                                    <Productcards
                                    title= {item.title}
                                    img = {item.image}
                                    category = {item.category}
                                    rate = {item.rate}
                                    comment = {item.comment}
                                    price = {item.price}
                                    />
                                </div>
                            )
                        })}
                        <button className={`${thirdhoverbtn ? 'prev-btn' : 'none-btn'}`}>
                            <BsChevronCompactLeft/>
                        </button>
                        <button className={`${thirdhoverbtn ? 'next-btn' : 'none-btn'}`}>
                            <BsChevronCompactRight/>
                        </button>
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

export default ProductPage