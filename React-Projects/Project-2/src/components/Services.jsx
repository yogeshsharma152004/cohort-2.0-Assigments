import React from 'react'

const Services = () => {
  return (
    <section className='services'>
          <div className="service">
            <div className=" card card1">
                <p>Services</p>

                <p>Explore our full range of coaching, <br /> training, and tennis experiences. From <br /> first serve to match point —  we've <br /> got the right program for you.</p>

                <p>Explore More <i className="ri-arrow-right-up-long-line"></i></p>
            </div>
            <div className="card card2">
                <img src="./src/assets/racket.jpg" alt="" />

                <p>Training Program</p>
                    
                         
                    <div className="bottom"><p>Programs designed for <br /> all ages and abilities.</p><i className="ri-arrow-right-up-long-line"></i></div>     

                    
            </div>
            <div className="card card3">
                <img src="./src/assets/balls.jpg" alt="" />

                <div className="top">
                    <p>Court Access</p>

                    <p>Hourly Court Rental</p>
                </div>

                 <div className="bottom">
                    <p>Step into a space built for <br /> players — to grow, compete, <br /> and thrive. </p>

                    <div className="arrow">
                        <i className="ri-arrow-left-long-line"></i>
                        <i className="ri-arrow-right-long-line"></i>
                    </div>
                 </div>
            </div>
          
          </div>
    </section>
  )
}

export default Services