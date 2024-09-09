import { useState } from "react";
import { useNavigate } from "react-router-dom" ;
import { useAuth } from "../store/auth";
import { toast } from "react-toastify" ;
import { BACKENDURL } from "../../important";
//css of toast
import 'react-toastify/dist/ReactToastify.css';

export const Register = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const navigate = useNavigate();
    const { storetokeninLS } = useAuth() ;

    //handling the input values
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });
    };


    //handling the form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); //to prevent by default refresh behaviour
        console.log(user);
        // alert("Information Saved");
        try {
            const response = await fetch(`${BACKENDURL}/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            // console.log(response);
            if (!response.ok) {
                const errorData = await response.json();
                console.log('Error:', errorData);
                // alert(`Error: ${errorData.extradetails}`);
                toast.error(errorData.extradetails ? errorData.extradetails : errorData.message) ;
            } else {
                const data = await response.json();
                // console.log('Response from Server:', data);

                //store token in local storage
                storetokeninLS(data.token) ;
                // localStorage.setItem("token" , data.token) ;

                toast.success("Registration successful!");
                setUser({username : "", email:"", phone:"", password:""}) ;
                navigate("/login");
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
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image" style={{ textAlign: 'center' }}>
                                <img src="https://img.freepik.com/premium-photo/couple-people-with-backpack-man-wearing-orange-hat_1161162-413834.jpg?uid=R85066503&ga=GA1.1.187689706.1724523170&semt=ais_hybrid"
                                    alt="image" width="550" height="550" />
                            </div>
                            <div className="registration-form">
                                <h1 className="main-headings mb-3">Register Fast & Book your Tour!!</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="username">Username</label>
                                        <input type="text" name="username" placeholder="username" id="username" required autoComplete="off"
                                            value={user.username} onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor="email">Enter Email</label>
                                        <input type="email" name="email" placeholder="email" id="email" required autoComplete="off"
                                            value={user.email} onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor="phone">Enter Phone No.</label>
                                        <input type="number" name="phone" placeholder="phone" id="phone" required autoComplete="off"
                                            value={user.phone} onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor="password">Enter password</label>
                                        <input type="password" name="password" placeholder="password" id="password" required autoComplete="off"
                                            value={user.password} onChange={handleInput} />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-submit">Register Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};
