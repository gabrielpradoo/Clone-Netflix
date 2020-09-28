import React from 'react';

import './styles.css';

function Header({black}) {
   


   return (
      <header className={black ? 'black' : ''}>
         <div className="header--logo">
            <a href="/">
               <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="Netflix Logo"/>
            </a>
         </div>

         <div className="header--user">
            <a href="/">
               <img src="https://occ-0-1125-1740.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABWemYbpNDP3NQzmQ16EYT7am36xx4y1I3GfPSW7gU021LqbImYfnKkZzt5PmAEJ7kZTHNtUt_qsZimnhQ1FYlbk.png?r=8aa" alt="Usuário"/>
            </a>
         </div>
     </header>
  );
}

export default Header;