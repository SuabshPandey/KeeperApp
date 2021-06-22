import React from 'react';

function Footer() { 
    const date = new Date().getFullYear();
        
    return(
        <footer>
            <p>Copyright &copy; Subash Pandey {date}</p>
        </footer>
    )
}

export default Footer;