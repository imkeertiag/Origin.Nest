import { useAuth } from "../store/auth";

export const  About = () => {
    const { user } = useAuth() ;
    return (
        <>
        <main>
        <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <p>
                            <p>Hii , {user ? user.username : "Admin"}</p>
                            <div className="tag-line">
                            <h1>"Why choose Us?"</h1> 
                            </div>
                        </p>
                        <p>
                        Welcome to Origin.Nest, our team of travel enthusiasts is dedicated to providing a hassle-free experience for tour operators and travelers alike you. Say goodbye to tedious paperwork and hello to more time exploring the world. Our user-friendly interface and automated contract features ensure a smooth and enjoyable journey from start to finish. Let us take care of the logistics, so you can focus on what matters most - creating unforgettable travel experiences.
                        {/* We handle every detail, allowing you to focus on creating unforgettable memories. Embark on a journey where luxury meets peace of mind. */}
                        </p>
                        <div className="btn btn-group"></div>
                        <a href="/services">
                            <button className="btn">Our Tour Packages</button>
                        </a>
                    </div>
                    
                    <div className="hero-images">
                        <img src="https://img.freepik.com/premium-photo/tourist-traveling-flat-vector-illustration-isolated-white-background_954807-1046.jpg?uid=R85066503&ga=GA1.1.187689706.1724523170&semt=ais_hybrid" alt="Let's Travel" width="500" height="500" />
                    </div>
                </div>
            </section>
        </main>
        </>
    );
};