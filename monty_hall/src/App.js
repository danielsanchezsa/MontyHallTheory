
import React, { useState } from 'react';
import Game from './screens/game';

function App() {

  const [games, setGames] = useState(0);

  const [stayAvg, setStayAvg] = useState(0);
  const [stay, setStay] = useState(0);

  const [changAvg, setChangeAvg] = useState(0);
  const [change, setChange] = useState(0);



  return (
    <div>

    <h1>Monty Hall Test</h1>

  
     <Game></Game>
     

     <div>

     <p> Not moving avg: {stayAvg}%  {stay}</p>
     
     <p> changing avg: {changAvg}% {change}</p>

     <p> Total games: {games} </p>
     </div>


    </div>
  );
}

export default App;
