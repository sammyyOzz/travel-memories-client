import React, { useRef, useState } from 'react'

import { Button } from '../button/button.component'
import { Form, FormControl } from '../form/form.component'
import * as Styles from './newMemoryForm.styles'

import { addNewMemory } from '../../redux/memories/memories.slice'
import { useDispatch } from 'react-redux'


export function NewMemoryForm() {
    const defaultMemory = { id: Date.now(), username: "", place: "", description: "", url: "" }

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

    const handleImageChange = e => {
        setNewMemory(prevState => { return { ...prevState, url: e.target.files[0]} })
    }

    const handleUploadImageButtonClick = () => hiddenInputRef.current.click()

    const handleSubmit = e => {
        e.preventDefault();
        
        if (!newMemory.url) {
            setNoImageError("An image is required")
            return
        } else {
            setNoImageError("")
        }

        _addNewMemory({ ...newMemory, url: URL.createObjectURL(newMemory.url) })
        setNewMemory(defaultMemory)
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    return (
        <Styles.Root>
            <Styles.Title>Post New Memories</Styles.Title>

            <Form handleSubmit={handleSubmit}>
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
                <input
                  type="file"
                  accept=".png, .jpg, .jpeg"
                  ref={hiddenInputRef}
                  onChange={handleImageChange}
                  style={{ display: 'none' }}
              />
                <Button type="button" onClick={handleUploadImageButtonClick}>Upload Image</Button>
                { newMemory.url.name && <Styles.ImageName>{newMemory.url.name}</Styles.ImageName> }
                { noImageError && <Styles.ImageName style={{ color: 'red' }}>{noImageError}</Styles.ImageName> }
                <Button type="submit" fullWidth>Save Memory</Button>
              </Form>
        </Styles.Root>
    )
}