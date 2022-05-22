import React, { useCallback, useEffect } from 'react'
import * as Styles from './memories.styles'

import { ListMemories } from '../../components/listMemories/listMemories.component';
import { NewMemoryForm } from '../../components/newMemoryForm/newMemoryForm.component';

import { useDispatch, useSelector } from 'react-redux';
import { selectMemories } from '../../redux/memories/memories.selectors';
import { selectLoggedInUser } from '../../redux/auth/auth.selectors';
import { getMemories } from '../../redux/memories/memories.slice';
import { AnimatedPage } from '../../components/animation/animatedPage.component';
import { HTTP_STATUS } from '../../utils/constants/httpStatus.constant';


function Memories() {
    /*************************************************************
     * selectors
     *************************************************************/
    const { data: memories, status } = useSelector(selectMemories)
    const { data: userData } = useSelector(selectLoggedInUser)


    /*************************************************************
     * dispatch
     *************************************************************/
    const dispatch = useDispatch()

    const _getMemories = useCallback(() => dispatch(getMemories()), [dispatch])

    /*************************************************************
     * hooks
     *************************************************************/
    useEffect(() => {
        if (status === null) {
            _getMemories()
        }
    }, [status, _getMemories])


    return (
        <>
            <AnimatedPage>
                <Styles.Root>
                    <Styles.Container>
                        <Styles.Title>Memories Gallery</Styles.Title>
                        <Styles.GridContainer>
                            <Styles.GridLeft style={{ width: !userData?._id && '100%' }}>
                                <ListMemories memories={memories} loading={status === HTTP_STATUS.PENDING} />
                            </Styles.GridLeft>

                            <Styles.GridRight style={{ display: !userData?._id && 'none' }}>
                                <NewMemoryForm />
                            </Styles.GridRight>
                        </Styles.GridContainer>
                    </Styles.Container>
                </Styles.Root>
            </AnimatedPage>
        </>
    )
}

export default Memories