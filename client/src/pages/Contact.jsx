import { useState } from "react";
import { useAuth } from "../store/auth";
import { BACKENDURL } from "../../important";
export const Contact = () => {
    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: "",
    });

    const [userData , setUserData] = useState(true); 
    const { user } = useAuth() ;

    if(userData && user){
        setContact({
            username: user.username , 
            email: user.email,
            message: "",
        });
        setUserData(false);
    }

    //handling the input values
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setContact({
            ...contact,
            [name]: value,
        });
    };

    //handling the form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); //to prevent by default refresh behaviour
        console.log(contact);
        
        alert("Information Saved");
        try {
            console.log(BACKENDURL);
            const response = await fetch(`${BACKENDURL}/api/form/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact),
            });
            // console.log(response);
            if (!response.ok) {
                const errorData = await response.json();
                console.log('Error:', errorData);
                alert(`Error: ${errorData.message}`);
            } else {
                const data = await response.json();
                // console.log('Response from Server:', data);
                alert("Information Sent!");
                setContact({username : "", email:"", message:""}) ;
            }
        } catch (error) {
            console.log("Error in handleSubmit:", error);
            alert("An error occurred. Please try again.");
        }
        
    };

    return (
        <>
            <section>
                <main>
                    <div className="contact-login">
                        <div className="container grid grid-two-cols">
                            <div className="contact-image">
                                <img src="https://img.freepik.com/premium-photo/customer-service-operator-with-headset-customer-support-call-center-hotline-customer-support-department-staff-concept-cartoon-minimal-style-illustration_76964-83205.jpg?uid=R85066503&ga=GA1.1.187689706.1724523170&semt=ais_hybrid" width="500" height="500" alt="login-image" />
                            </div>
                            <div className="contact-form">
                                <h1 className="main-headings mb-3">Any Doubt ? Please Contact Us!!</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="username">Username</label>
                                        <input type="text" name="username" placeholder="username" id="username" required autoComplete="off"
                                            value={contact.username} onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Enter Email</label>
                                        <input type="email" name="email" placeholder="email" id="email" required autoComplete="off"
                                            value={contact.email} onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor="message">All Queries !!</label>
                                        <textarea name="message" placeholder="message" id="message" required autoComplete="off"
                                            value={contact.message} onChange={handleInput} />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-submit">Contact Us</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};