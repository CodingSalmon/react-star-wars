import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {getAllStarships} from '../../services/sw-api';
import './StarshipPage.css'

class StarshipPage extends Component {

    state = {
        starships: [],
        starship:[]
    }
    
    getStarship = (idx) => {
        return this.state.starships[idx]
    }

    async componentDidMount() {
        const starships = await getAllStarships()
        this.setState({starships:starships.results})
        const starship = await this.getStarship(this.props.match.params.idx)
        this.setState({starship:starship})
    }

    render() {
        return (
            <div className='StarshipPage'>
                {this.state.starship.name ?
                <div className='Starship'>
                    <span>Name:</span> {this.state.starship.name}<br></br><br></br>
                    <span>Model:</span> {this.state.starship.model}<br></br><br></br>
                    <Link
                        to='/'
                    >
                        RETURN
                    </Link>
                </div>
                : 'Loading...'}
            </div>
        )
    }
}

export default StarshipPage;