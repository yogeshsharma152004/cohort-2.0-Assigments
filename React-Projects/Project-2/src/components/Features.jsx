import React from "react";

const Features = () => {
  return (
    <section className="feature">
      <div className="cards">
        <div className="card card-1">
          <img src="./src/assets/tennis.png" alt="" />

          <p>
            Professional hard courts
            <span>
              
              <br />
              with tournament-grade <br /> lighting & climate control — <br />
              play in perfect conditions, <br /> in
            </span>
            any season
          </p>

          <div className="bottom">
            <div className="toggle">
              <input type="checkbox" id="mode"></input>
              <label htmlFor="mode">
                <span className="dot-white">
                  <span className="dot"></span>
                </span>
              </label>
            </div>
            <h3>Game Mode</h3>
          </div>
        </div>

        <div className="card card-2">
          <img src="./src/assets/yoga.jpg" alt="" />

          <p>Private & Group Lessons</p>
        </div>

        <div className="card card-3">
          <div className="top">
            <h1>100+</h1>
            <h5>Pro Coaches</h5>

            <p>Certified professionals ready to boost your <br /> game from first serve to tournament level.</p>
          </div>
          <div className="bottom">
            <div className="begi">
              <p>Beginner</p>

              <div className="circles">
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
              </div>

              <p>55</p>
            </div>

            <div className="inter">
              <p>Intermediate</p>

              <div className="circles">
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
              </div>

              <p>40</p>
            </div>

            <div className="adv">
              <p>Advanced</p>

              <div className="circles">
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                <span className="circle"></span>
                
              </div>

              <p>35</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
