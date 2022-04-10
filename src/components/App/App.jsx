import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import DetailsPage from '../DetailsPage/DetailsPage';

function App() {
  return (
    <div className="App">
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        {/* <Route path="/detailsPage">
          <DetailsPage />
        </Route> */}
        
        <Switch>
          <Route path="/detailsPage/:id" children={<DetailsPage />} />
        </Switch>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}

export default App;
