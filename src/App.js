import './App.css';
import {Route, Routes, Link} from 'react-router-dom';

//views
import ContactApps from './views/ContactApps';
import DetailContact from './views/DetailContact';
import CategoryContact from './views/CategoryContact';

//components
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<ContactApps/>} />
      {/* <Route exact path='/detail' element={<DetailContact/>} /> */}
      <Route exact path='/:category' element={<CategoryContact/>} />
    </Routes>
    </>
  );
}

export default App;
