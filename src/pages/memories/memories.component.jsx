import React from 'react'
import * as Styles from './memories.styles'

import { ListMemories } from '../../components/listMemories/listMemories.component';
import { NewMemoryForm } from '../../components/newMemoryForm/newMemoryForm.component';

import { useSelector } from 'react-redux';
import { selectMemories } from '../../redux/memories/memories.selectors';
import { selectLoggedInUser } from '../../redux/auth/auth.selectors';


function Memories() {
    const memories = useSelector(selectMemories)
    const { data: userData } = useSelector(selectLoggedInUser)

    return (
        <Styles.Root>
            <Styles.Container>
                <Styles.Title>Memories Gallery</Styles.Title>
                <Styles.GridContainer>
                    <Styles.GridLeft style={{ width: !userData?._id && '100%' }}>
                        <ListMemories memories={memories} />
                    </Styles.GridLeft>

                    <Styles.GridRight style={{ display: !userData?._id && 'none' }}>
                        <NewMemoryForm />
                    </Styles.GridRight>
                </Styles.GridContainer>
            </Styles.Container>
      </Styles.Root>
    )
}

export default Memories