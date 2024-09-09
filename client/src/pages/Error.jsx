import { NavLink } from "react-router-dom";
import "../pages/Error.css";

export const Error = () => {
   return (
     <>
     <section id="error-page">
         <div className="content">
            <h2 className="header">404</h2>
            <h4>
                Sorry! Wrong Destination ..Page Not Found !!
            </h4>
            <p>
            Oops! Seems like you’ve ventured off the map. This page doesn’t exist here. Let's guide you back to our homepage for a smoother journey. Thank you for your understanding!
            </p>
            <div className="btns">
                <NavLink to="/">Way to Home</NavLink>
                <NavLink to="/contact">Report Issue</NavLink>
            </div>
         </div>
     </section>
     </>
   );
};