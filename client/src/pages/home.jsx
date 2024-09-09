
export const Home = () => {
    return (
        <>
        <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <p>
                            <div className="tag-line">
                            <h1>"Discover Your Next Adventure: Explore, Experience, and Embrace the Journey!"</h1>
                            </div>
                        </p>
                        <p>
                        At Origin.Nest, we offer global tours that blend luxury, safety, and personalized experiences. Enjoy secure travel with trusted partners, guided by experts who prioritize your well-being. Immerse yourself in exclusive, tailored adventures with elegant accommodations and unique cultural experiences. 
                        {/* We handle every detail, allowing you to focus on creating unforgettable memories. Embark on a journey where luxury meets peace of mind. */}
                        </p>
                        <div className="btn btn-group"></div>
                        <a href="/contact">
                            <button className="btn">Connect Now</button>
                        </a>
                        <a href="/services">
                            <button className="btn secondary-btn">Learn More</button>
                        </a>
                    </div>
                    
                    <div className="hero-images">
                        <img src="https://img.freepik.com/premium-photo/adventurous-boy-traveling_1029469-191162.jpg?uid=R85066503&ga=GA1.1.187689706.1724523170&semt=ais_hybrid" alt="Let's Travel" width="500" height="500" />
                    </div>
                </div>
            </section>

            
      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
          <img src="https://img.freepik.com/free-photo/3d-travel-icon-with-couple_23-2151037308.jpg?uid=R85066503&ga=GA1.1.187689706.1724523170&semt=ais_hybrid" alt="Let's Travel" width="380" height="500" />
          </div>

          <div className="hero-content">
          <p>
            <div className="tag-line">
            <h1>"Wander Freely, Explore Deeply – Your Journey Begins Here!"</h1>
            </div>
          </p>
            <p>
            Safety is our top priority. We work with trusted partners worldwide, ensuring that your travels are secure, no matter where your wanderlust takes you. Our tours are led by experienced guides who are well-versed in local cultures and customs, offering you insider knowledge while keeping you safe. We also provide 24/7 support throughout your journey, so help is always just a call away..
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">Contact Us</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">Our Services</button>
              </a>
            </div>
          </div>
        </div>
      </section>
        </main>
        {/* <h1>Hello Home Page</h1> */}
        </>
    );
};