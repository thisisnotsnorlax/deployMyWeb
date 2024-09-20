import './Hero.css'
import img from '../../assets/img.jpg'

const Hero = () => {
  return (
    <div className='hero-wrapper' id='Hero'>

      <div className="container">

      <img src={img} className='img rounded-circle ms-5' />

        <div className="content">
            <div className="heading">
            <h1>Soliman, Kelvin Russel</h1>
            <p className='sub-heading'>
              Crafting Digital Solutions with Passion and Precision
            </p>
            <p className='text'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos odio recusandae explicabo eveniet, vero accusantium?
            </p>
            </div>              
          </div>


      </div>
        

    </div>  
  )
}

export default Hero
