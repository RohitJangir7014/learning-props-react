import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card image="https://cdn.motor1.com/images/mgl/NGGZon/s3/koenigsegg-gemera.jpg" title="rohit" description="this is props" />
      <hr/>
      <Card image="https://cdn.motor1.com/images/mgl/NGGZon/s3/koenigsegg-gemera.jpg" title="rohit" description="this is props" />
      <hr/>
      <Card image="https://cdn.motor1.com/images/mgl/NGGZon/s3/koenigsegg-gemera.jpg" title="rohit" description="this is props" />
      <hr/>
      <Card image="https://cdn.motor1.com/images/mgl/NGGZon/s3/koenigsegg-gemera.jpg" title="rohit" description="this is props" />
      <hr/>
    </>
  )
}

export default App
