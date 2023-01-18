import { useState } from 'react'
import {Link} from 'react-router-dom'
import {BsArrowRight , BsHouse} from 'react-icons/bs'
import './Login.css'

const emailregex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/

const Login = () => {

    const [emailvalue , setemailvalue] = useState('')
    const [emailerr , setemailerr] = useState('')
    const [emailerrstyle , setemailerrstyle] = useState(true)

    const [passvalue , setpassvalue] = useState('')
    const [passerr , setpasserr] = useState('')
    const [passerrstyle , setpasserrstyle] = useState(true)

    function submitbtn(e){

        e.preventDefault()

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
            <div className='logincontainer'>
                <div className='brand'>
                    <h1>Milosen</h1>
                    <small>.Brand</small>
                </div>
                <form className='form'>
                    <div>
                        <p>Email</p>
                        <input type='text' className={`${!emailerrstyle ? 'border-err' : ''}`} value={emailvalue} onChange={(e) => setemailvalue(e.target.value)}/>
                        <small>{emailerr}</small>
                    </div>
                    <div>
                        <p>Password</p>
                        <input type="Password" className={`${!passerrstyle ? 'border-err' : ''}`} value={passvalue} onChange={(e) => setpassvalue(e.target.value)}/>
                        <small>{passerr}</small>
                    </div>
                    <button onClick={submitbtn}>Login</button>
                </form>
                <p>
                    Don't have an account ?
                    <Link to={'/Signup'}>
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login