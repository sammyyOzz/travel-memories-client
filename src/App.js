import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { ListMemories } from './components/listMemories/listMemories.component';
import { selectMemories } from './redux/memories/memories.selectors';
import * as Styles from './App.styles'
import { Navbar } from './components/navigation/navbar.component';
import { NewMemoryForm } from './components/newMemoryForm/newMemoryForm.component';


function App() {
  /***********************************************************************
   * selectors
   ***********************************************************************/
  const memories = useSelector(selectMemories)


  return (
    <>
      <Navbar />
      <Styles.Container>
    
        <Styles.GridContainer>
          <Styles.Title>Memories Gallery</Styles.Title>

          <Styles.GridLeft>
            <ListMemories memories={memories} />
          </Styles.GridLeft>

          <Styles.GridRight>
            <NewMemoryForm />
          </Styles.GridRight>
        </Styles.GridContainer>
      </Styles.Container>
    </>
  );
}

export default App;
