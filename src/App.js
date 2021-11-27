import './App.css';
import Header from './Header';
import {Switch,Route} from 'react-router-dom';
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
      
      <Switch>
          <Route path="/" component = {Trending} exact/>
            
          <Route path="/Toprated" component={Toprated} />
          
          <Route path="/Popular" component={Popular} />
            
         
          <Route path="/Upcoming" component={Upcoming} />
           
          
          <Route path="/Nowplaying" component={Nowplaying} />
            
          <Route path="/Moviedetails/:id" component={Moviedetails} />

          <ProtectedRoute path="/Watchlist" component={Watchlist}/>

        </Switch>
        
        
      
      
      
      
    </div>
  );
}

export default App;
