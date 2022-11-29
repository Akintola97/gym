import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './pages/Home'
import Team from './pages/Team'
import Facility from './pages/Facility'
import Memberships from './pages/Memberships'
import Coaching from './pages/Coaching'
import Rhino from './pages/Rhino'
import Boxing from './pages/Boxing'
import Cart from './pages/Cart'
import Powerlifting from './pages/Powerlifting';
import Strongman from './pages/Strongman';



function App() {
  return (
    <div className="App">
<BrowserRouter>
      <Navigation />
      
      <Routes>
        <Route path = '/Home' element={<Home/>}></Route>
        <Route path = '/Team' element={<Team/>}></Route>
        <Route path = '/Facility' element={<Facility/>}></Route>
        <Route path = '/Memberships' element={<Memberships/>}></Route>
        <Route path = '/Coaching' element={<Coaching/>}></Route>
        <Route path = '/Rhino' element={<Rhino/>}></Route>
        <Route path = '/Boxing' element={<Boxing/>}></Route>
        <Route path = '/Cart' element={<Cart/>}></Route>
        <Route path = '/powerlifting' element={<Powerlifting/>}></Route>
        <Route path = '/strongman' element={<Strongman/>}></Route>
    </Routes>

      </BrowserRouter>
     
    </div>
  );




}

export default App;
