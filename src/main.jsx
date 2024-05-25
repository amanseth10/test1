import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter,Routes} from "react-router-dom"
import Layout from './Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Add from './pages/Add'
// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <BrowserRouter basename='/test1'>
//     <Route>
//     <Route path='/test1' element={<Layout/>}>
//       <Route path='' element={<Home/>}/>
//       <Route path='/contact' element={<Contact/>}/>
//       <Route path='/add' element={<Add/>}/>
//     </Route>
//     </Route>
//     </BrowserRouter>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter  >
    <Routes>
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/add' element={<Add/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)