import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../styles/footer.css';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';

const Footer = () => {
    return (
        <div className='footer'>

            <div className='icons'>

                <Link  to="/">
                
                        <HomeIcon />
                    

                </Link>

                <Link to="/project">
                
                        <WorkIcon />
                    
                </Link>

                <Link to="/contact">
                
                        <ContactMailIcon />
                    
                </Link>

                <a href='https://www.linkedin.com/' > 
                    <LinkedInIcon />
                </a>
                <a href='https://www.github.com/' > <GitHubIcon /></a>

            </div>

           
        </div>


    )
}

export default Footer;