import { Routes as Router, Route } from "react-router-dom";

import Home from "../Home/Home";
import Signup from "../Signup/Signup";
import Signin from "../Signin/signin";

const Routes = () => {
    return (
        <Router>
            <Route path="/" element={<Home />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
        </Router>
    );
};

export default Routes;  