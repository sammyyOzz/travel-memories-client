import React, { useRef, useState } from 'react'

import { Button } from '../button/button.component'
import { Form, FormControl } from '../form/form.component'
import * as Styles from './newMemoryForm.styles'

import { saveMemory } from '../../redux/memories/memories.slice'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoggedInUser } from '../../redux/auth/auth.selectors'


export function NewMemoryForm() {
    const defaultMemory = { place: "", description: "", image: "" }

    /***********************************************************************
     * selectors
     ***********************************************************************/
    const { data: userData } = useSelector(selectLoggedInUser)


    /***********************************************************************
     * dispatch
     ***********************************************************************/
    const dispatch = useDispatch()

    const _addNewMemory = memoryData => dispatch(saveMemory(memoryData))
        .unwrap().then(() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }))


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
        setNewMemory(prevState => { return { ...prevState, image: e.target.files[0]} })
    }

    const handleUploadImageButtonClick = () => hiddenInputRef.current.click()

    const handleSubmit = e => {
        e.preventDefault();
        
        if (!newMemory.image) {
            setNoImageError("An image is required")
            return
        } else {
            setNoImageError("")
        }

        const formData = new FormData()
        formData.append('place', newMemory.place)
        formData.append('description', newMemory.description)
        formData.append('imageUrl', newMemory.image)

        _addNewMemory(formData)
        setNewMemory(defaultMemory)
    }

    return (
        <Styles.Root>
            <Styles.Title>Post New Memories</Styles.Title>

            <Form handleSubmit={handleSubmit} encType='multipart/form-data'>
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
                { newMemory.image.name && <Styles.ImageName>{newMemory.image.name}</Styles.ImageName> }
                { noImageError && <Styles.ImageName style={{ color: 'red' }}>{noImageError}</Styles.ImageName> }
                <Button type="submit" fullWidth>Save Memory</Button>
              </Form>
        </Styles.Root>
    )
}