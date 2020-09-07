import React, { useState } from 'react';
import '../styles/App.css';
import DisplayInfo from './DisplayInfo'
import Searchbar from './Searbar'

import { useSetInfo } from '../hooks/useSetInfo'

function App() {
  const [currentDate, setCurrentDate] = useState('')
  const [info] = useSetInfo(currentDate)

  return (
    <div className="App">
      <Searchbar onDate={(newDate) => setCurrentDate(newDate)} />
      <DisplayInfo info={info} />
    </div>
  );
}

export default App;
