import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './pages/home'
import Team from './pages/team'
import Facility from './pages/facility'
import Memberships from './pages/memberships'
import Coaching from './pages/coaching'
import Rhino from './pages/rhino'
import Boxing from './pages/boxing'
import Cart from './pages/cart'
import Powerlifting from './pages/powerlifting';
import Strongman from './pages/strongman';
import Expectations from './pages/expectations';
import Footer from './pages/footer';



function App() {
  return (
    <div className="App">
<BrowserRouter>
      <Navigation />
      <Routes>
        <Route path = '/' element={<Home/>}></Route>
        <Route path = '/team' element={<Team/>}></Route>
        <Route path = '/facility' element={<Facility/>}></Route>
        <Route path = '/memberships' element={<Memberships/>}></Route>
        <Route path = '/coaching' element={<Coaching/>}></Route>
        <Route path = '/rhino' element={<Rhino/>}></Route>
        <Route path = '/boxing' element={<Boxing/>}></Route>
        <Route path = '/cart' element={<Cart/>}></Route>
        <Route path = '/powerlifting' element={<Powerlifting/>}></Route>
        <Route path = '/strongman' element={<Strongman/>}></Route>
        <Route path = '/expectations' element={<Expectations/>}></Route>
    </Routes>

      </BrowserRouter>
     <Footer />
    </div>
  );




}

export default App;
