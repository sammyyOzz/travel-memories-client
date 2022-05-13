import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLoggedInUser } from '../../redux/auth/auth.selectors'
import { selectComments } from '../../redux/memories/memories.selectors'
import { createComment, getComments } from '../../redux/memories/memories.slice'
import { HTTP_STATUS } from '../../utils/constants/httpStatus.constant'
import { Form, FormControl } from '../form/form.component'
import { CommentLoader } from '../loaders/commentLoader.component'
import * as Styles from './memoryForDisplay.styles'


export function MemoryForDisplay({ _id, imageUrl, place, description, name }) {
    /***********************************************************************
    * selectors
    ***********************************************************************/
    const { data: userData } = useSelector(selectLoggedInUser)
    const { data: comments, status } = useSelector(selectComments)

    /***********************************************************************
    * state
    ***********************************************************************/
    const [newComment, setNewComment] = useState("")

    /***********************************************************************
    * dispatch
    ***********************************************************************/
    const dispatch = useDispatch()
    const _createComment = (data) => dispatch(createComment(data)).unwrap().then(() => setNewComment(''))
    const _getComments = (data) => dispatch(getComments(data))


    /***********************************************************************
    * hooks
    ***********************************************************************/
    useEffect(() => {
        _getComments({ urlParams: `/${_id}` })
    }, [])

    /***********************************************************************
    * handlers
    ***********************************************************************/
    const handleSubmit = e => {
        e.preventDefault()

        _createComment({ body: newComment, urlParams: `/${_id}` })
    }

    return (
        <Styles.Root>
            <Styles.Left>
                <Styles.Image src={imageUrl} />
                <Styles.Place>{ place }</Styles.Place>
                <Styles.Description>{ description }</Styles.Description>
                <Styles.Footer>{ `--${name}--` }</Styles.Footer>
            </Styles.Left>

            <Styles.Right>
                
                    <Styles.RightTop>
                        <Styles.Title>Comments</Styles.Title>
                        { status === HTTP_STATUS.PENDING ? (
                            <CommentLoader />
                        ) : (
                            <>
                                { comments.map(comment => (
                                    <Styles.Comment key={comment._id}>
                                        <Styles.CommentBody>{ comment.body }</Styles.CommentBody>
                                        <Styles.CommentAuthor><span>{ comment.user.name.split(' ')[0] }</span></Styles.CommentAuthor>
                                    </Styles.Comment>
                                ))}
                            </>
                        )}

                    </Styles.RightTop>
                
                <Styles.RightContainer>
                    <Styles.RightBottom>
                        <Form handleSubmit={handleSubmit}>
                            <FormControl
                                placeholder="make a comment"
                                value={newComment}
                                handleChange={(e) => setNewComment(e.target.value)}
                                disabled={!userData?._id}
                            />
                        </Form>
                    </Styles.RightBottom>
                </Styles.RightContainer>
            </Styles.Right>
        </Styles.Root>
    )
}