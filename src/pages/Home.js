import React from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  const history = useHistory();

    return (
        <div className='home'>

           
            <div className='home__container'>
            <p>Hi There!</p>
                <div className='home__container__details'>   <p  id='pre__name'> I'm  <span id='name'>  Damini.</span>  </p>  
                    <p id='description'>A web devloper currently working with ReactJs</p>
                    <p> Glad to see you here. 😊</p></div>
                <div className='home__container__buttons'>
                    <button onClick={() => history.push('/contact')}>Contact</button>
                </div>
            </div>

        </div>
    )
}

export default Home