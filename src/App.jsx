import { useState } from 'react';
import './App.css';

import General from './components/General/General';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer'

// import content from '../../assets/content'


function App() {

  const [lang, setLang] = useState('uz');

  return (
  <>
  <General  lang={ lang } />
  <Header lang={ lang } setLanguage={ setLang } />
  <Main lang={ lang } />
  <Footer lang={ lang } />
  </>

 );
}

export default App;
