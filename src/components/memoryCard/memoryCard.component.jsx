import React from 'react';
import * as Styles from './memoryCard.styles'
import { baseUrl } from '../../utils/services/axios'
import { useDispatch, useSelector } from 'react-redux';
import { setMemoryForDisplay } from '../../redux/memories/memories.slice';
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';
import { defaultMemories } from '../../data/memories.data'
import { selectLoggedInUser } from '../../redux/auth/auth.selectors';

const lockedImage = "https://media.istockphoto.com/photos/padlock-picture-id1156910737?b=1&k=20&m=1156910737&s=170667a&w=0&h=ki-uA7qQnB_NO3VSHvnHGNfhh0JN7z3sVNVgQwPriUA="

export function MemoryCard({ _id, title, imageUrl, experience, isPublic, authorized, user }) {
    const { data: userData } = useSelector(selectLoggedInUser)

    const isAuthorized = isPublic 
        ? true
        : (authorized?.includes(userData?._id) ? true : false)

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
                <Styles.Image src={isAuthorized ? `${baseUrl}/images/${imageUrl}` : lockedImage} alt="" />
            </Styles.ImageContainer>
            <Styles.Place>{ isAuthorized ? title : 'PRIVATE' }</Styles.Place>
            <Styles.Description>{ isAuthorized ? experience : 'You do not have access to this private content' }</Styles.Description>
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