import { useAuth } from "../store/auth" ;

export const Services = () => {
    const { services } = useAuth() ;
    return (
        <>
        <section className="section-services">
            <div className="containers">
                <h1 className="main-headings services">Top Tour Packages</h1>
            </div>

            <div className="container grid grid-three-cols">

               {services.map((curElem, index) => {
                const {price, description , provider , service} = curElem ;
                return (
                    <div className="card" key={index}>
                    <div className="card-img">
                        <img src="https://img.freepik.com/premium-photo/cartoon-illustration-two-children-reading-book_1308172-38435.jpg?uid=R85066503&ga=GA1.1.187689706.1724523170&semt=ais_hybrid" alt="tour package1" width="250" height="250" />
                    </div>
                    <div className="card-details">
                        <div className="grids grid-two-cols">
                            <p className="provider">{provider}</p>
                            <p>{price}</p>
                        </div>
                        <h2>{service}</h2>
                        <p>{description}</p>
                    </div>
                </div>
                );
               })} 
                
            </div>
        </section>
        </>
    );
};

// <img src="https://img.freepik.com/free-vector/children-exploring-open-book_1308-171938.jpg?uid=R85066503&ga=GA1.1.187689706.1724523170&semt=ais_hybrid" alt="Comming Soon" height="400" width="550px" />