import React from 'react'
import * as Styles from './viewMemory.styles'
import { useSelector } from 'react-redux'
import { selectMemoryForDisplay } from '../../redux/memories/memories.selectors'
import { MemoryCard } from '../../components/memoryCard/memoryCard.component'
import { Chat } from '../../components/chat/chat.component'
import { Layout } from '../../components/layout/layout.component'

function ViewMemory() {
    const { data: memory } = useSelector(selectMemoryForDisplay)

    return (
        <Layout hideSidePanel removePadding>
            <Styles.Root>
                <Styles.Left>
                    <Styles.LeftBody>
                        <Styles.Title>{ memory?.place }</Styles.Title>
                        <MemoryCard { ...memory } />
                    </Styles.LeftBody>
                </Styles.Left>

                <Styles.Right>
                    <Chat { ...memory } />
                </Styles.Right>
            </Styles.Root>
        </Layout>
    )
}

export default ViewMemory