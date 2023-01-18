import { BsChatLeftText, BsDash } from 'react-icons/bs'
import './BasketCards.css'

const Basketcards = (props) => {
    return (
        <div>
            {props.basketlist.map(Bitem => {
                return (
                <div className='basketcard-container' key={`basketlst ${Bitem.id}`}>
                    <img src={Bitem.img}/>
                    <div className='basketcard-details'>
                        <h2> {Bitem.title} </h2>
                        <div className='basketcard-category'>
                            <p> {Bitem.category}  </p>
                        </div>
                        <p className='Bicon-rate'>
                            {Bitem.rate} 
                        </p>
                        <div className='basketcard-comment'>
                            <BsChatLeftText/>
                            <p> {Bitem.comment} </p>
                        </div>
                        <div className='basketcard-price'>
                            <p>$ {Bitem.price} </p>
                            <div className='basketcard-btn'>
                                <button className='Bbtn1'>
                                    Buy
                                </button>
                                <button className='Bbtn2' onClick={() => props.setbasketlist(props.basketlist.filter(product => product.id != Bitem.id))}>
                                    <BsDash/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>     
    )
}

export default Basketcards