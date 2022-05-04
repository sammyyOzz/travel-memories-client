import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { ListMemories } from './components/listMemories/listMemories.component';
import { selectMemories } from './redux/memories/memories.selectors';
import * as Styles from './App.styles'
import { Navbar } from './components/navigation/navbar.component';
import { Form, FormControl } from './components/form/form.component';
import { Button } from './components/button/button.component';
import { addNewMemory } from './redux/memories/memories.slice';



function App() {
  const defaultMemory = { 
    id: Date.now(), 
    username: "", 
    place: "", 
    description: "", 
    url: "https://images.unsplash.com/photo-1579710758949-3ab36db30f1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
  }

  /***********************************************************************
   * selectors
   ***********************************************************************/
  const memories = useSelector(selectMemories)


  /***********************************************************************
   * dispatch
   ***********************************************************************/
  const dispatch = useDispatch()

  const _addNewMemory = memoryData => dispatch(addNewMemory(memoryData))

  
  /***********************************************************************
   * state and refs
   ***********************************************************************/
  const [newMemory, setNewMemory] = useState(defaultMemory)
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

    _addNewMemory(newMemory)
    setNewMemory(defaultMemory)

  }

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
            <Styles.FormContainer>
              <Styles.FormTitle>Post New Memories</Styles.FormTitle>

              <Form handleSubmit={handleMemorySubmit}>
                <FormControl 
                  label="Username" 
                  name="username" 
                  value={newMemory.username}
                  handleChange={handleInputChange} 
                  required  
                />
                <FormControl 
                  label="Place" 
                  name="place" 
                  value={newMemory.place}
                  handleChange={handleInputChange} 
                  required 
                />
                <FormControl 
                  label="Description" 
                  name="description" 
                  value={newMemory.description}
                  handleChange={handleInputChange} 
                  textarea 
                  required 
                />
                {/* <input
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  ref={hiddenInputRef}
                  onChange={e => setNewMemory(prevState => { return { ...prevState, url: e.target.files[0]} })}
                  style={{ display: 'none' }}
              />
                <Button type="button" onClick={handleUploadImageButtonClick}>Upload Image</Button>
                { newMemory.url.name && <Styles.ImageName>{newMemory.url.name}</Styles.ImageName> }
                { noImageError && <Styles.ImageName style={{ color: 'red' }}>{noImageError}</Styles.ImageName> } */}
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
