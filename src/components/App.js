import React from 'react';
import '../styles/App.css';
import DisplayInfo from './DisplayInfo'

import { useSetInfo } from '../hooks/useSetInfo'

function App() {
  const { info } = useSetInfo()

  return (
    <div className="App">
      <DisplayInfo info={info} />
    </div>
  );
}

export default App;
