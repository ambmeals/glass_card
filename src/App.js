import React from 'react'
import './App.css';
import background from './images/desktopography2.jpg'
import GlassCard from './glasscard.js'

function App() {
  return (
    <div className="App"
     style= {{
      width: '100vw',
      height: '150vh',
      backgroundImage:`url(${background})`,
      backgroundPosition: 'center',
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat',
      alignItems:'center',
      justifyContent: 'center'
    }}
    >
  <GlassCard/>

    </div>
  );
}

export default App;
