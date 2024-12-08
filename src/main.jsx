import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Heading from './components/Heading.jsx'
import Section from './components/Section.jsx'
// import Section from './components/Cards.jsx'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Second from './components/Landingpage/Second.jsx'
import Coursecard from './components/Landingpage/Coursecard.jsx'
import Yourgols from './components/Landingpage/Yourgols.jsx'
import Plans from './components/Landingpage/Plans.jsx'
import Home from './components/Landingpage/Home.jsx'
import Coursedetail from './components/Coursedetail.jsx'






const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
    <Route path="/" element={<Home/>}/>

    <Route path="/coursedetail/:couseid" element={<Coursedetail/>} />
    



  
   
   </Route>
   )

)







createRoot(document.getElementById('root')).render(
  <StrictMode>
 
<RouterProvider router ={router}/>
  </StrictMode>,
)
