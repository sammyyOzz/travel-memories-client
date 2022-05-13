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
    const _createComment = (data) => dispatch(createComment(data))
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
                <Styles.Image src={"https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} />
                <Styles.Place>{ place }</Styles.Place>
                <Styles.Description>{ description }</Styles.Description>
                <Styles.Footer>{ `--${name}--` }</Styles.Footer>
            </Styles.Left>

            <Styles.Right>
                <Styles.RightContainer>
                    <Styles.RightTop>
                        { status === HTTP_STATUS.PENDING ? (
                            <CommentLoader />
                        ) : (
                            <></>
                        )}

                    </Styles.RightTop>
                
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