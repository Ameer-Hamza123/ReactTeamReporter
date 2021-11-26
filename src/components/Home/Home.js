import { Link } from "react-router-dom";
import {  Button } from 'antd';
import 'antd/dist/antd.css';

const Home = ()=>{
    return (
<Button><Link to="signin">Signin</Link></Button>
);
}
export default Home;