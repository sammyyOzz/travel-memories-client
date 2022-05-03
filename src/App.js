import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { ListMemories } from './components/listMemories/listMemories.component';
import { selectMemories } from './redux/memories/memories.selectors';
import * as Styles from './App.styles'
import { Navbar } from './components/navigation/navbar.component';
import { Form, FormControl } from './components/form/form.component';
import { Button } from './components/button/button.component';

function App() {
  /***********************************************************************
   * selectors
   ***********************************************************************/
  const memories = useSelector(selectMemories)

  
  /***********************************************************************
   * state and refs
   ***********************************************************************/
  const [newMemory, setNewMemory] = useState({ id: Math.random(), username: "", title: "", description: "", url: "" })
  const [noImageError, setNoImageError] = useState(false)
  const hiddenInputRef = useRef()


  /***********************************************************************
   * handlers
   ***********************************************************************/
  
  const handleInputChange = e => {
    setNewMemory(prevState => {
      return { ...prevState, [e.target.name]: e.target.value }
    })
  }

  const handleUploadImageButtonClick = () => hiddenInputRef.current.click()

  const handleMemorySubmit = e => {
    e.preventDefault();
    
    if (!newMemory.url) {
      setNoImageError("An image is required")
      return
    } else {
      setNoImageError("")
    }


  }

  return (
    <>
      <Navbar />
      <Styles.Container>
        <Styles.GridContainer>
          <Styles.GridLeft>
            <ListMemories memories={memories} />
          </Styles.GridLeft>

          <Styles.GridRight>
            <Styles.FormContainer>
              <Styles.FormTitle>Post New Memories</Styles.FormTitle>

              <Form handleSubmit={handleMemorySubmit}>
                <FormControl label="Username" name="username" handleChange={handleInputChange} required  />
                <FormControl label="Title" name="title" handleChange={handleInputChange} required />
                <FormControl label="Description" name="description" handleChange={handleInputChange} textarea required />
                <input
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  ref={hiddenInputRef}
                  onChange={e => setNewMemory(prevState => { return { ...prevState, url: e.target.files[0]} })}
                  style={{ display: 'none' }}
              />
                <Button type="button" onClick={handleUploadImageButtonClick}>Upload Image</Button>
                { newMemory.url.name && <Styles.ImageName>{newMemory.url.name}</Styles.ImageName> }
                { noImageError && <Styles.ImageName style={{ color: 'red' }}>{noImageError}</Styles.ImageName> }
                <Button type="submit" fullWidth>Save Memory</Button>
              </Form>
            </Styles.FormContainer>
          </Styles.GridRight>
        </Styles.GridContainer>
      </Styles.Container>
    </>
  );
}

export default App;
