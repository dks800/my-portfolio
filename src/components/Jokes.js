import React, {Component} from 'react';

const Joke = ({ joke: {setup, punchline } }) => ( 
    <p>{setup} <em>{punchline}</em></p>
)

class Jokes extends Component {
    state = { joke : {}, jokes : [] };
    componentDidMount = () => {
        fetch('https://official-joke-api.appspot.com/random_joke')
            .then(response => response.json())
            .then(json => this.setState({joke: json}))
            .catch(error => alert(error.message));
    };
    
    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
            .then(response => response.json())
            .then(json => this.setState({jokes: json}))
            .catch(error => alert(error.message));
    }

    render(){
        return(
            <div>
                <h2>Highlighted Joke</h2>
                <Joke joke={this.state.joke}/>
                <h3>Want new 10 jokes?</h3>
                <button onClick={this.fetchJokes}>Click Me!</button>
                {
                    this.state.jokes.map(joke => {
                        return <Joke key={joke.id} joke={joke}/>
                    })
                }
            </div>
        )
    }
}

export default Jokes;