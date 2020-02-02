import React, {useState} from 'react';
import './css/style.css';
import InformativePanel from './components/InformativePanel'
import Header from './components/Header'



function App() {

	const [lang, setLang] = useState('NL')

  return (
    <div className="App">
      <InformativePanel lang={lang} setLang={setLang}/>
      <Header />
    </div>
  );
}

export default App;
