import React from 'react';
import SOCIALPROFILE from '../data/socialProfile';

const Profile = props => {
    const {title, img, link} = props.profiles;
    return(
        <span style={{display: 'inline-block', width: 'auto', margin: 5}}>
            <a href={link}>
                <img border="0" alt={title} src={img} width="35" height="35" />
            </a>
        </span>
    );
}

const Profiles = () => (
    <div>
        <h3>Connect with me!</h3>
        <div>
            {
                SOCIALPROFILE.map(PROFILE => (
                    <Profile key={PROFILE.id} profiles={PROFILE}/>
                ))
            }
        </div>
    </div>
);

export default Profiles;