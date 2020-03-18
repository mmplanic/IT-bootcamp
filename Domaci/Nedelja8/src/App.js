import React from 'react';

import Imenik from './Imenik';

var kontakti = [ 
  {id:1,name:"Pera Peric",number:"+158 127896678"},
  {id:2,name:"Mika Mikic",number:"+158 785678966"},
  {id:3,name:"Zika Zikic",number:"+789 898789667"}
];

function App() {

  return (
    <Imenik contacts={kontakti} />

  );
}

export default App;
