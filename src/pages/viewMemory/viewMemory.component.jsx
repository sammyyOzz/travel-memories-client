import React from 'react'
import * as Styles from './viewMemory.styles'
import { useSelector } from 'react-redux'
import { AnimatedPage } from '../../components/animation/animatedPage.component'
import { selectMemoryForDisplay } from '../../redux/memories/memories.selectors'
import { MemoryCard } from '../../components/memoryCard/memoryCard.component'

function ViewMemory() {
    const { data: memory } = useSelector(selectMemoryForDisplay)

    return (
        <AnimatedPage>
            <Styles.Root>
                <Styles.Container>
                    <Styles.Title>{ memory?.place }</Styles.Title>
                    <Styles.GridContainer>
                        <Styles.GridLeft>
                            <MemoryCard { ...memory } />
                        </Styles.GridLeft>

                        <Styles.GridRight>
                            {/* <NewMemoryForm /> */}
                        </Styles.GridRight>
                    </Styles.GridContainer>
                </Styles.Container>
            </Styles.Root>
        </AnimatedPage>
    )
}

export default ViewMemory