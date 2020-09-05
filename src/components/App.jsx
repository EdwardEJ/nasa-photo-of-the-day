import React from 'react';
import '../styles/App.css';
import DisplayInfo from './DisplayInfo'
import Searchbar from './Searbar'

import { useSetInfo } from '../hooks/useSetInfo'

function App() {
  const [info] = useSetInfo()
  console.log(info)
  return (
    <div className="App">
      <Searchbar />
      <DisplayInfo info={info} />
    </div>
  );
}

export default App;
