import {HashRouter as Router, Route} from 'react-router-dom';
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
        <Route path="/detailsPage" exact>
          <DetailsPage />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}

export default App;
