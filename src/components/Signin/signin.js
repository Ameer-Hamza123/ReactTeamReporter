import { Link } from "react-router-dom";
import {  Button } from 'antd';
import 'antd/dist/antd.css';

const Signin = ()=>{
    return(
<Button><Link to="signup">Signup</Link> </Button>
);
}
export default Signin;