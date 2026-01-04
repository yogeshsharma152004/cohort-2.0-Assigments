const Hero = () => {
  return (
    <section className="main">
      <div className="upper">
        <img src="./src/assets/center.webp" alt="" />

        <div className="content">
          <div className="top">
            <h1>
              Unleash Your Inner Champion Today. <br />
              All In One Place
            </h1>

            <p>
              Join the ultimate tennis experience — where passion meets
              performance,
              <br />
              and every swing brings you closer to vicory
            </p>

            <p className="button">Start your own journey</p>
          </div>
          <div className="bottom">
            <div className="left">
              <p>
                Train with real professionals. <br />
                Get the real results.{" "}
              </p>

              <div className="profile">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uc3xlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1588347300869-4e8709274b1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxwZXJzb25zfGVufDB8fDB8fHww"
                  alt=""
                />
                <img
                  src="https://images.unsplash.com/photo-1625262550495-1d3bfb5c1502?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgzfHxwZXJzb25zfGVufDB8fDB8fHww"
                  alt=""
                />
              </div>
            </div>
            <div className="right">
              <p>
                Instagram <i className="ri-arrow-right-up-long-line"></i>
              </p>
              <p>
                Facebook <i className="ri-arrow-right-up-long-line"></i>
              </p>
              <p>
                Tik Tok <i className="ri-arrow-right-up-long-line"></i>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="center">
         <div className="top">

         </div>
      </div>
    </section>
  );
};

export default Hero;
