import React, {Component} from 'react';
import './App.css';
import {getAllStarships} from '../../services/sw-api';
import {Route, Link} from 'react-router-dom';
import StarshipPage from '../StarshipPage/StarshipPage';

class App extends Component {

  state = {
    starships:[]
  }

  async componentDidMount() {
    const starships = await getAllStarships();
    this.setState({starships:starships.results})
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">STAR WARS STARSHIPS</header>
      <Route exact path='/' render={() => 
        <section>
          {this.state.starships.map((starship,idx) => 
            <Link
              key={idx}
              to={`starship/${idx}`}
            >
            {starship.name}
            </Link>
          )}
        </section>
      }>
      </Route>
      <Route exact path='/starship/:idx' render={(props) =>
        <StarshipPage 
          {...props}
        />
      }>
      </Route>
    </div>
  )};
}

export default App;
