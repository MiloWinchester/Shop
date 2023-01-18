import Home from './Pages/Homepage/Home.jsx'
import ProductPage from './Pages/Productpage/Product.jsx'
import Login from './Pages/Loginpage/Login.jsx'
import Signup from './Pages/Signup/Signup.jsx'
import Basket from './Pages/Basketpage/Basket.jsx'
import {Routes , Route} from 'react-router'

function App() {

  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home/>}/>
        <Route path='Login'>
          <Route index element={<Login/>}/>
        </Route>
        <Route path='signup'>
          <Route index element={<Signup/>}/>
        </Route>
        <Route path='Shop'>
          <Route index element={<ProductPage/>}/>
        </Route>
        <Route path='Basket'>
          <Route index element={<Basket/>}/>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
