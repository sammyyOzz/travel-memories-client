import React from 'react';
import * as Styles from './memoryCard.styles'
import { baseUrl } from '../../utils/services/axios'
import { useDispatch } from 'react-redux';
import { setMemoryForDisplay } from '../../redux/memories/memories.slice';
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';
import { defaultMemories } from '../../data/memories.data'



export function MemoryCard({ _id, title, imageUrl, experience, user }) {

    const navigate = useNavigate()
    
    const dispatch = useDispatch()

    const _setMemoryForDisplay = (data) => dispatch(setMemoryForDisplay(data))

    const handleClick = () => {
        _setMemoryForDisplay({ _id, title, imageUrl, experience, user })
        navigate(`/view-memory/${_id}`)
    }

    return (
        <Styles.Root onClick={handleClick}>
            <Styles.ImageContainer>
                <Styles.Image src={`${baseUrl}/images/${imageUrl}`} alt="" />
            </Styles.ImageContainer>
            <Styles.Place>{ title }</Styles.Place>
            <Styles.Description>{ experience }</Styles.Description>
            <Styles.Footer>{ `--${user.name}--` }</Styles.Footer>
        </Styles.Root>
    )
}

MemoryCard.defaultProps = {
    _id: `${Math.random()}`,
    imageUrl: defaultMemories[0].url,
    title: 'Hong Kong',
    experience: 'A nice place',
    user: {
        name: "John Doe"
    }
}

MemoryCard.propTypes = {
    _id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    experience: PropTypes.string,
    user: PropTypes.object
}