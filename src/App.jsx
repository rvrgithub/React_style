// import { useState } from 'react'
import './App.css'
import { useState } from 'react';
// import { Button } from './components/button'
import {Button} from "antd"
function App() {
  const [theme ,setTheme] =useState("dark")

  return (
    <div className="App">
    {/* <h2>Theme is: {theme}</h2> */}
    <Button type="primary">Primary Button</Button>
<Button>Hello ANTD</Button>
    <Button>Default Button</Button>
    <Button type="dashed">Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link">Link Button</Button>
 
    {/* <Button
    theme ={theme}
    onClick={()=>{
    }}>
      SignIn
    </Button>
    <Button
     theme ={theme}
    onClick={()=>{
      setTheme(theme ==="light" ? "dark":"light")
    }}>
      click me
    </Button> */}
    </div>
  )
}

export default App



