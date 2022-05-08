import React from 'react'
import * as Styles from './memories.styles'

import { ListMemories } from '../../components/listMemories/listMemories.component';
import { NewMemoryForm } from '../../components/newMemoryForm/newMemoryForm.component';

import { selectMemories } from '../../redux/memories/memories.selectors';
import { useSelector } from 'react-redux';


function Memories() {

    const memories = useSelector(selectMemories)

    return (
        <Styles.Root>
            <Styles.Container>
                <Styles.Title>Memories Gallery</Styles.Title>
                <Styles.GridContainer>
                    <Styles.GridLeft>
                        <ListMemories memories={memories} />
                    </Styles.GridLeft>

                    <Styles.GridRight>
                        <NewMemoryForm />
                    </Styles.GridRight>
                </Styles.GridContainer>
            </Styles.Container>
      </Styles.Root>
    )
}

export default Memories