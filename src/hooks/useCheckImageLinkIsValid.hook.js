import { useState, useEffect } from 'react'
import { baseUrl } from '../utils/services/axios'
import axios from 'axios'
import { placeholderImages } from '../data/placeholderImages.data'


export function useCheckImageLinkIsValid(imageUrl) {
    const [validImageUrl, setValidImageUrl] = useState('')

    useEffect(() => {
        axios
            .get(`${baseUrl}/images/${imageUrl}`)
            .then(res => {
                if (res.status === 200) {
                    setValidImageUrl(`${baseUrl}/images/${imageUrl}`)
                } else {
                    const index = Math.floor(Math.random() * 10)
                    setValidImageUrl(placeholderImages[index])
                }
            })
    }, [])

    return {
        validImageUrl
    }
}