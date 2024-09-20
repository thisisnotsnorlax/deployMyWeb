import './Navbar.css'
// import logo from '../../assets/logo.jpg'


const Navbar = () => {

    // const showIcon = document.querySelector(".show");

    

  return (
    
    <header className='nav-wrapper'>
      <a href="#Hero" className='logo'>Port<span>folio</span></a>
        
        <nav className="nav">
          <ul className="ul-nav">
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#Project">Project</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>

       <a href="#" className='btn-cta'>Contact</a> 
       <a href="#" className='show' ><i class="fa-solid fa-bars"></i></a>

    </header>
  
  )

}

export default Navbar
