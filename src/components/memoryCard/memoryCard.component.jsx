import React from 'react';
import * as Styles from './memoryCard.styles'
import { baseUrl } from '../../utils/services/axios'
import { useDispatch } from 'react-redux';
import { setMemoryForDisplay } from '../../redux/memories/memories.slice';
import PropTypes from 'prop-types'



export function MemoryCard({ _id, imageUrl, place, description, user: { name } }) {
    
    const dispatch = useDispatch()

    const _setMemoryForDisplay = (data) => dispatch(setMemoryForDisplay(data))


    const handleClick = () => {
        _setMemoryForDisplay({ _id, imageUrl, place, description, name })
    }

    return (
        <Styles.Root onClick={handleClick}>
            <Styles.ImageContainer>
                <Styles.Image src={`${baseUrl}/images/${imageUrl}`} alt="" />
            </Styles.ImageContainer>
            <Styles.Place>{ place }</Styles.Place>
            <Styles.Description>{ description }</Styles.Description>
            <Styles.Footer>{ `--${name}--` }</Styles.Footer>
        </Styles.Root>
    )
}

MemoryCard.defaultProps = {
    _id: `${Math.random()}`,
    user: {
        name: PropTypes.string
    }
}

MemoryCard.propTypes = {
    _id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    place: PropTypes.string,
    description: PropTypes.string,
    user: PropTypes.object
}