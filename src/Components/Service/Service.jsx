import './Service.css'
import  card_img from '../../assets/img.jpg'


const Service = () => {
  return (
      <div className='service-wrapper' id='Skills'> 

            
        <div className="cards-container ">
        
              <div class="card">
                  <div class="card-header p-3 ">
                    <img src={card_img} className='card_img'/>
                  </div>
                      <div class="card-body">
                        <h2 className='fs-4'>Web Development</h2>
                        <p className='fs-6'>
                          Lorem ipsum dolor sit amet consectetur,  adipisicing elit. Pariatur, facere.
                        </p>
                      </div>
                  <div class="card-footer">
                    <button className='btn btn-outline-dark'>See Service</button>
                  </div>
              </div>




              <div class="card">
                  <div class="card-header p-3 ">
                    <img src={card_img} className='card_img'/>
                  </div>
                      <div class="card-body">
                        <h2 className='fs-4'>Web Designing</h2>
                        <p className='fs-6'>
                          Lorem ipsum dolor sit amet consectetur,  adipisicing elit. Pariatur, facere.
                        </p>
                      </div>
                  <div class="card-footer">
                    <button className='btn btn-outline-dark'>See Service</button>
                  </div>
              </div>


              <div class="card">
                  <div class="card-header p-3 ">
                    <img src={card_img} className='card_img'/>
                  </div>
                      <div class="card-body">
                        <h2 className='fs-4'>Software Development</h2>
                        <p className='fs-6'>
                          Lorem ipsum dolor sit amet consectetur,  adipisicing elit. Pariatur, facere.
                        </p>
                      </div>
                  <div class="card-footer">
                    <button className='btn btn-outline-dark'>See Service</button>
                  </div>
              </div>









        </div> 
      </div>
  )
}

export default Service
