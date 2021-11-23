import './App.css';
import Header from './Header';
import {Routes,Route} from 'react-router-dom';
import Nowplaying from './pages/Nowplaying';
import Popular from './pages/Popular';
import Upcoming from './pages/Upcoming';
import Toprated from './pages/Toprated';
import Trending from './pages/Trending';
import Moviedetails from './pages/Moviedetails';
import ProtectedRoute from './auth/protected-route';
import Watchlist from './pages/Watchlist';



function App() {
  

  return (
    <div className="App">
      
      <Header/>
      <Routes>
          <Route path="/" exact>
            <Trending/>
          </Route>
          <Route path="/Toprated">
          <Toprated/>
          </Route>
          <Route path="/Popular">
            <Popular/>
          </Route>
          <Route path="/Upcoming">
            <Upcoming/>
          </Route>
          <Route path="/Nowplaying">
            <Nowplaying/>
          </Route>
          <Route path="/Moviedetails/:id">
            <Moviedetails/>
          </Route>
          <ProtectedRoute path="/Watchlist" exact component={Watchlist}/>
            
      </Routes>
      
    </div>
  );
}

export default App;
