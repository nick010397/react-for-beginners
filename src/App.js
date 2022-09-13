import Home from "./routes/Home"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Detail from "./routes/Detail"




export default function App(){
 
  
  return(
      <BrowserRouter>
        <Routes>
          <Route path="/movie/:id" element={<Detail/>}></Route>
          <Route path="/" element={<Home/>}>
            
          </Route>
        </Routes>
      </BrowserRouter>
        
        
  )
  

  
}

