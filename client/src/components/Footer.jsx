import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import ShareIcon from '@mui/icons-material/Share';
import "../styles/Footer.css";


function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <InstagramIcon /> <FacebookIcon /> <TwitterIcon />
                <a href='https://github.com/michaelwomack2001/4155-TastyOnABudget'>
                    <GitHubIcon />
                </a>
                <ShareIcon />
            </div>
            <p> &copy; 2023 buypotatobakepotato.com  </p>

        </div>
    )
}

export default Footer
