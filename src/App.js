import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { ListMemories } from './components/listMemories/listMemories.component';
import { selectMemories } from './redux/memories/memories.selectors';

function App() {
  /**
   * selectors
   */
  const memories = useSelector(selectMemories)

  return (
    <div className="App">

      <ListMemories memories={memories} />

    </div>
  );
}

export default App;
