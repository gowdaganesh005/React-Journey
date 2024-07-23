import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './chai.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(    
    <>
    <App />
    <Chai />
    </>
  
)

// we have the the ReactDOM and its going t0 create a root b itself and hence we are gooing to use a react dom and make changes in it to original dom and hence we are attacking a div of id root as mentioned in the index.html
// we can render only one component at a time so we have <></> so that  we can pack all the components in the one element and the use it as single element

