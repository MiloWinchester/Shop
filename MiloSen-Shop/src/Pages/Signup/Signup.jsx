import { useState } from 'react'
import { Link } from 'react-router-dom'
import {BsArrowRight , BsHouse} from 'react-icons/bs'
import './Signup.css'

const emailregex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
const numregex = /09[0-3][0-9]-?[0-9]{3}-?[0-9]{4}/

const Signup = () => {
    
    const [namevalue, setnamevalue] = useState('')
    const [namerr , setnamerr ] = useState('')
    const [namerrstyle , setnamerrstyle] = useState(true)
    
    const [lastnvalue , setlastnvalue] = useState('')
    const [lastnerr , setlastnerr] = useState('')
    const [lastnerrstyle , setlastnerrstyle] = useState(true)

    const [emailvalue , setemailvalue] = useState('')
    const [emailerr , setemailerr] = useState('')
    const [emailerrstyle , setemailerrstyle] = useState(true)

    const [phonevalue , setphonevalue] = useState('')
    const [phonerr , setphonerr] = useState('')
    const [phonerrstyle , setphonerrstyle] = useState(true)

    const [passvalue , setpassvalue] = useState('')
    const [passerr , setpasserr] = useState('')
    const [passerrstyle , setpasserrstyle] = useState(true)

    const [confirmpvalue , setconfirmpvalue] = useState('')
    const [confirmperr , setconfirmperr] = useState('')
    const [confirmperrstyle, setconfirmperrstyle] = useState(true)
    

    function submit(e) {
        e.preventDefault()

        if(!namevalue){
            setnamerr('Name is required')
            setnamerrstyle(false)
        }else{
            setnamerr('')
            setnamerrstyle(true)
        }

        if(!lastnvalue){
            setlastnerr('Last Name is required')
            setlastnerrstyle(false)
        }else{
            setlastnerr('')
            setlastnerrstyle(true)
        }

        const resultER = emailregex.test(emailvalue)

        if(!resultER){
            setemailerr('Email is not valid')
            setemailerrstyle(false)
        }else{
            setemailerr('')
            setemailerrstyle(true)
        }
        if(emailvalue == 0){
            setemailerr('Email is required')
            setemailerrstyle(false)
        }
        
        

        const resultPR = numregex.test(phonevalue)

        if(!resultPR){
            setphonerr('Phone Number is not Valid')
            setphonerrstyle(false)
        }else{
            setphonerr('')
            setphonerrstyle(true)
        }
        if(phonevalue == 0){
            setphonerr('Phone Number is required')
            setphonerrstyle(false)
        }

        if(passvalue.length < 8){
            setpasserr('Password must be atleast 8 charectors')
            setpasserrstyle(false)
        }else{
            setpasserr('')
            setpasserrstyle(true)
        }
        if(passvalue == 0){
            setpasserr('Password is required')
            setpasserrstyle(false)
        }

        if(!(confirmpvalue === passvalue)){
            setconfirmperr("Password does not match")
            setconfirmperrstyle(false)
        }else{
            setconfirmperr('')
            setconfirmperrstyle(true)
        }
        if(!confirmpvalue){
            setconfirmperr('Password is required')
            setconfirmperrstyle(false)
        }

    }

    return(
        <div className='container'>
            <div className='back-icon' onClick={() => window.history.go(-1)}>
                <BsArrowRight/>
            </div>
            <div className='home-icon'>
                <Link to='/'>
                    <div>
                        <BsHouse/>
                    </div>
                </Link>
            </div>
            <div className='signup-page'>
                <div className='brand'>
                    <h1>Milosen</h1>
                    <small>.Brand</small>
                </div>
                <form className='form-container'>
                    <div className='incontainer'>
                        <div>
                            <p>Name</p>
                            <input type="text" value={namevalue} onChange={(e) => setnamevalue(e.target.value)} className={`${!namerrstyle ? 'border-err' : 'border-valid'}`}/>
                            <small>{namerr}</small>
                        </div>
                        <div>
                            <p>Last Name</p>
                            <input type="text" value={lastnvalue} onChange={(e) => setlastnvalue(e.target.value)} className={`${!lastnerrstyle ? 'border-err' : 'border-valid'}`}/>
                            <small>{lastnerr}</small>
                        </div>
                    </div>
                    <div className='incontainer'>
                        <div>
                            <p>Email</p>
                            <input type="Email" value={emailvalue} onChange={(e) => setemailvalue(e.target.value)} className={`${!emailerrstyle ? 'border-err' : 'border-valid'}`}/>
                            <small>{emailerr}</small>
                        </div>
                        <div>
                            <p>Phone Number</p>
                            <input type="text" value={phonevalue} onChange={(e) => setphonevalue(e.target.value)} className={`${!phonerrstyle ? 'border-err' : 'border-valid'}`}/>
                            <small>{phonerr}</small>
                        </div>
                    </div>
                    <div className='incontainer'>
                        <div>
                            <p>Password</p>
                            <input type="Password" value={passvalue} onChange={(e) => setpassvalue(e.target.value)} className={`${!passerrstyle ? 'border-err' : 'border-valid'}`}/>
                            <small>{passerr}</small>
                        </div>
                        <div>
                            <p>Confirm Password</p>
                            <input type="Password" value={confirmpvalue} onChange={(e) => setconfirmpvalue(e.target.value)} className={`${!confirmperrstyle ? 'border-err' : 'border-valid'}`}/>
                            <small>{confirmperr}</small>
                        </div>
                    </div>
                    <button onClick={submit}>Sign up</button>
                </form>
                <p>
                    Already have an account ? 
                    <Link to='/Login'>
                       Login
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Signup