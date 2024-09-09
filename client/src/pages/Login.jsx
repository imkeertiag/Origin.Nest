/*
The useState hook in React!
useState is a fundamental hook in React that allows you to add state to functional components. It's a way to manage state in a functional component without having to convert it to a class component.

How does useState work?
The useState hook takes an initial value as an argument and returns an array with two elements:
The current state value
A function to update the state value
*/
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify" ;
//css of toast
import 'react-toastify/dist/ReactToastify.css';
import { BACKENDURL } from "../../important";
export const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    //handling the input values
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        });
    };

    const navigate = useNavigate();
    const { storetokeninLS } = useAuth();

    //handling the form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); //to prevent by default refresh behaviour
        // console.log(user);
        try {
            // console.log(BACKENDURL);
            const response = await fetch(`${BACKENDURL}/api/auth/login`, {
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
                toast.error(errorData.extradetails ? errorData.extradetails : errorData.message);
            } else {
                const data = await response.json();
                // console.log('Response from server:', data);
                //store token in local storage
                storetokeninLS(data.token);
                // localStorage.setItem("token" , data.token) ;

                toast.success("Login successful!");
                setUser({ email: "", password: "" });
                navigate("/");
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
                    <div className="section-login">
                        <div className="container grid grid-two-cols">
                            <div className="login-image">
                                <img src="https://img.freepik.com/premium-vector/suitcase-is-ground-palm-tree-mountain_1178789-2573.jpg?uid=R85066503&ga=GA1.1.187689706.1724523170&semt=ais_hybrid" width="500" height="500" alt="login-image" />
                            </div>
                            <div className="login-form">
                                <h1 className="main-headings mb-3">Already Registerd? Let's Login Like a Pro!!</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="email">Enter Email</label>
                                        <input type="email" name="email" placeholder="email" id="email" required autoComplete="off"
                                            value={user.email} onChange={handleInput} />
                                    </div>
                                    <div>
                                        <label htmlFor="password">Enter password</label>
                                        <input type="password" name="password" placeholder="password" id="password" required autoComplete="off"
                                            value={user.password} onChange={handleInput} />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-submit">Login Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};