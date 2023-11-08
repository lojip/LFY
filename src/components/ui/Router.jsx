import { BrowserRouter, Routes, Route } from 'react-router-dom';
import More from '../screens/More/more.jsx';
import Links from '../screens/links/links.jsx';
import Home from '../screens/home/home.jsx';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Links' element={<Links />} />
                <Route path='/Links/more_info/:title' element={<More />} />
                <Route path='/about' element={<p>В доработке</p>} />


                <Route path='*' element={<div>Not Found</div>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;