import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { ListMemories } from './components/listMemories/listMemories.component';
import { selectMemories } from './redux/memories/memories.selectors';
import * as Styles from './App.styles'
import { Navbar } from './components/navigation/navbar.component';

function App() {
  /**
   * selectors
   */
  const memories = useSelector(selectMemories)

  return (
    <div className="App">
      <Navbar />
      <Styles.Container>
        <Styles.GridContainer>
          <Styles.GridLeft>
            <ListMemories memories={memories} />
          </Styles.GridLeft>

          <Styles.GridRight>
            right grid
          </Styles.GridRight>
        </Styles.GridContainer>
      </Styles.Container>
    </div>
  );
}

export default App;
