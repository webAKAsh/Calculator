import React, { useState } from 'react'
import { TiClipboard } from 'react-icons/ti'

const App = () => {

  const [fill, setFill] = useState('')

  const clickHandler = (e) => {
    e.preventDefault();
    setFill(fill.concat(e.target.name))
  }

  const clear = () => {
    setFill("")
  }

  const backspace = (e) => {
    setFill(fill.slice(0, -1))
  }

  const calculate = () => {
    try {
      setFill(eval(fill).toString())
    } catch(err) {
      setFill('Error')
    }
  }

  const clipBoard = (e) => {
    e.preventDefault()
    let copy1 = document.querySelector('.clipboard')
    let copy2 = copy1.previousElementSibling
    navigator.clipboard.writeText(copy2.value)
  }

  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <div className='w-auto h-auto shadow-xl'>

      <div className='relative'>
      <input type='text' value={fill} className='w-full h-14 font-numb2 text-3xl text-right tracking-wider focus:outline-none' readOnly/>
      <button onClick={clipBoard} className='absolute left-0 top-0 clipboard'
      ><TiClipboard className='text-xl'/></button>
      </div>

        <div className='grid grid-cols-4'>
        <button
        onClick={clear} 
        className='col-span-2 text-white bg-reactColor font-numb tracking-wider'>
        Clear</button>
        <button onClick={backspace} className='forAll'>
        C</button>
        <button onClick={clickHandler} name='/' className='forAll'>
        &divide;</button>
        <button onClick={clickHandler} name='7' className='forAll'>
        7</button>
        <button onClick={clickHandler} name='8' className='forAll'>
        8</button>
        <button onClick={clickHandler} name='9' className='forAll'>
        9</button>
        <button onClick={clickHandler} name='*' className='forAll'>
        &times;</button>
        <button onClick={clickHandler} name='6' className='forAll'>
        6</button>
        <button onClick={clickHandler} name='5' className='forAll'>
        5</button>
        <button onClick={clickHandler} name='4' className='forAll'>
        4</button>
        <button onClick={clickHandler} name='-' className='forAll'>
        &ndash;</button>
        <button onClick={clickHandler} name='3' className='forAll'>
        3</button>
        <button onClick={clickHandler} name='2' className='forAll'>
        2</button>
        <button onClick={clickHandler} name='1' className='forAll'>
        1</button>
        <button onClick={clickHandler} name='+' className='forAll'>
        +</button>
        <button onClick={clickHandler} name='.' className='forAll'>
        .</button>
        <button onClick={clickHandler} name='0' className='forAll'>
        0</button>
        <button onClick={calculate} className='col-span-2 text-white bg-reactColor font-extrabold text-2xl'>
        =</button>
        </div>
      </div>
    </div>
  )
}

export default App
