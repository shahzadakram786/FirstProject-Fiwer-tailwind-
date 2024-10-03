import React from 'react'
import styled from 'styled-components'
import img from '../Assets/background_img_01b.jpg'
import logo from '../Assets/logo.png'

const HeroSection = () => {
  return (
    <Wrapper>
      <div className='mainContainer flex flex-col items-center justify-center text-white'>

        <div className='imgContainer'>
          <img className='img1 w-full h-auto ' src={img} alt="background" />
        </div>

        <div className='textContainer gap-15 flex flex-col justify-center items-center p-4'>
          
          <div className='imgContainer2 '>
               <img className='w-full' src={logo} alt="logo" />
               
          </div>

          <div>
            <h2 className='text-5xl font-bold mb-2 '>Free Bootstrap 4 <br />
            Website Template
          </h2>
          <p className='text-lg'>Which ones is your favorite?</p>
          </div>
          
        </div>
        
      </div>
    </Wrapper>
    
  )
}

const Wrapper = styled.section`
.mainContainer{
  background:rgb(34, 28, 92);
  position:relative;
  width:100%;
  height:100vh
}

.imgContainer{
width:100%;
height:auto;
position:absolute;
top:0;
left:0;
z-index:1;
}

.img1{
width:100%;
height:100%;
object-fit:cover;

}

.textContainer{
position:relative;
text-align:center;
z-index:2;
}

.imgContainer2{
width:30%;
height:20vh;
}
`

export default HeroSection