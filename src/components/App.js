import React, { Component } from 'react';
import Projects from './Projects';
import Profiles from './SocialProfile';
import profileImage from '../assets/Dipak.jpeg';
import Title from './Title';

class App extends Component {
    state = {displayBio: false};

    toggelDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio});
    }

    render() {
        return(
            <div>
                <img src={profileImage} alt='My Profile' className='my_profile'/>
                <h1>Hello!</h1>
                <p>My Name is Deepak</p>
                <Title />
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I'm learning ReactJS.</p>
                            <button onClick={this.toggelDisplayBio}>Show Less</button>
                        </div>
                    ) : (
                    <div>
                        <button onClick={this.toggelDisplayBio}>Read more</button>
                    </div>
                    )
                }
                <hr/>
                <Projects />
                <hr/>
                <Profiles />
            </div>
        )
    }
}

export default App;