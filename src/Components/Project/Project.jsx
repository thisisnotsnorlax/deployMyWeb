import './Project.css'
import proj1 from '../../assets/proj1.jpg'
import proj2 from '../../assets/proj2.jpg'
import proj3 from '../../assets/proj3.jpg'
import proj4 from '../../assets/proj4.jpg'




const Project = () => {
  return (
    <div className='project-wrapper' id='Project'>


          <div className="proj-container">
              <div className="proj-box">
                <a href="#"><img src={proj1} className='proj-img'/></a>
                
                  <div className="proj-info">
                      <h4 className='proj-heading'>This is my first Project</h4>
                      <p className='proj-text'>Lorem ipsum dolor sit amet.</p>
                  </div>
                  
              </div> 

              <div className="proj-box">
                <a href="#"><img src={proj2} className='proj-img'/></a>
                  
                  <div className="proj-info">
                    <h4 className='proj-heading'>This is my Second Project</h4>
                    <p className='proj-text'>Lorem ipsum dolor sit amet.</p>
                  
                  </div>
              </div> 

              <div className="proj-box">
                <a href="#"><img src={proj3} className='proj-img'/></a>
               
                  <div className="proj-info">
                    <h4 className='proj-heading'>This is my Third Project</h4>
                    <p className='proj-text'>Lorem ipsum dolor sit amet.</p>
                  </div>
              </div> 

              <div className="proj-box">
                <a href="#"><img src={proj4} className='proj-img'/></a>
                 
                  <div className="proj-info">
                    <h4 className='proj-heading'>This is my Fourth Project</h4>
                    <p className='proj-text'>Lorem ipsum dolor sit amet.</p>
                  </div>
              </div>  
            

          </div>


    </div>
  )
}

export default Project
