import Home from '../pages/home';
import TotalServices from '../components/services';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () =>(
    <BrowserRouter>
        <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/services/' element= {<TotalServices/>}/>
            <Route path='/404/' element= {<div>404</div>}/>
        </Routes>
    </BrowserRouter>
);
export default Router;

