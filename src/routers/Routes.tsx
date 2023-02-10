import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from '../component/Home';

const Application = () => {
    return (         
      <BrowserRouter>
        <Routes>
          <Route path='/'                   element={<HomePage/>} />
          <Route path='/blog/:title'        element={<HomePage/>} />
          <Route path='/category/:category' element={<HomePage/>} />
        </Routes>
      </BrowserRouter>
    );
}
export default Application;