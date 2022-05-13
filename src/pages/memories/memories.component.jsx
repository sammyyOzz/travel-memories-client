import React, { useCallback } from 'react'
import * as Styles from './memories.styles'

import { ListMemories } from '../../components/listMemories/listMemories.component';
import { NewMemoryForm } from '../../components/newMemoryForm/newMemoryForm.component';

import { useDispatch, useSelector } from 'react-redux';
import { selectMemories, selectMemoryForDisplay } from '../../redux/memories/memories.selectors';
import { selectLoggedInUser } from '../../redux/auth/auth.selectors';
import { getMemories, setMemoryForDisplay } from '../../redux/memories/memories.slice';
import { useEffect } from 'react';
import { AnimatedPage } from '../../components/animation/animatedPage.component';
import { HTTP_STATUS } from '../../utils/constants/httpStatus.constant';
import { MemoryForDisplay } from '../../components/memoryForDisplay/memoryForDisplay.component';

import TransitionsModal from '../../components/modal/modal.component'

function Memories() {
    /*************************************************************
     * selectors
     *************************************************************/
    const { data: memories, status } = useSelector(selectMemories)
    const { data: userData } = useSelector(selectLoggedInUser)
    const memoryForDisplay = useSelector(selectMemoryForDisplay)


    /*************************************************************
     * dispatch
     *************************************************************/
    const dispatch = useDispatch()

    const _getMemories = useCallback(() => dispatch(getMemories()), [dispatch])
    const _setMemoryForDisplay = (data) => dispatch(setMemoryForDisplay(data))

    /*************************************************************
     * hooks
     *************************************************************/
    useEffect(() => {
        if (status === null) {
            _getMemories()
        }
    }, [status, _getMemories])


    /*************************************************************
     * handlers
     *************************************************************/
    const handleModalClose = () => _setMemoryForDisplay(null)

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

            { memoryForDisplay && (
                <TransitionsModal open={memoryForDisplay} handleClose={handleModalClose}>
                    <MemoryForDisplay { ...memoryForDisplay } />
                </TransitionsModal>
            )}
        </>
    )
}

export default Memories