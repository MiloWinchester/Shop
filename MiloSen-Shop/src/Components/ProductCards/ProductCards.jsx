import { BsChatLeftText, BsPlusLg } from 'react-icons/bs'
import './ProductCards.css'

const Productcards = (props) => {
    return(
        <div className='productcard-container'>
            <div>
                <img src={props.img}/> 
            </div>
            <h2> {props.title} </h2>
            <div className='productcard-category'>
                <p> {props.category}  </p>
            </div>
            <p className='Picon-rate'>
                {props.rate} 
            </p>
            <div className='productcard-comment'>
                <BsChatLeftText/>
                <p> {props.comment} </p>
            </div>
            <div className='productcard-price'>
                <p>$ {props.price} </p>
                <button onClick={() => props.setbasketlist(
                    [...props.basketlist,
                        {id : props.id ,
                        img : props.img ,
                        title : props.title ,
                        category : props.category ,
                        comment : props.comment , 
                        price : props.price }
                    ])}>
                    <BsPlusLg/>
                </button>
            </div>
        </div>
    )
}

export default Productcards