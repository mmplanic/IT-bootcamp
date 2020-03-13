import React from 'react';


import FormaF from './formaFunkcija';
import FormaK from './formaKlasa';
import CardF from './cardFunkcija';
import CardK from './cardKlasa';

function App() {
  return (<>
    <FormaF text="Dobar dan"/>
    <FormaK text="Dobro vece"/>
    <CardF desc="I'm crazy and I know it" url = "https://icon2.cleanpng.com/20180330/spw/kisspng-iphone-emoji-apple-ios-11-emojis-5abe1fe31ed9c6.7613688515224094431264.jpg"/>
    <CardK desc="But don't tell anyone" url = "https://c7.uihere.com/files/920/299/709/secret-emojis-1-smiley-emoticon-clip-art-goodbye.jpg"/>
    </>
  );
}

export default App;
