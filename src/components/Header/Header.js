import React from 'react';
import './header.css'
const Header = () => {


    const handleToggle = () => {
    document.getElementById('navlink').classNameList.toggle('hide');
    console.log('click')
    };
    return (
        <div className='navbar'>
            
                <div className='logo position'>
                <div >
                    <img src="./logo.png" alt="" />
                </div>
                <div className='d-flex align-items-center mt-2'>
                <h1  style={{fontSize:"18px",lineHeight:"0px", margin:"5px",display:"inline"}}>LOGO.COM</h1>
                </div>
                </div>

                <div className='nav-item nav me-5'>
                    
                    <div className="nav__link hide">
                    <a href="#">Home</a>
                    <a href="#">Properties</a>
                    <a href="#">Agents</a>
                    <a href="#">Blog</a>
                    <button className='ms-5 login-button'>Login</button>
                    </div>


                    <div className="hamburger" id="bar" onClick={handleToggle}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    </div>
                </div>


            </div>
            
    );
};

export default Header;