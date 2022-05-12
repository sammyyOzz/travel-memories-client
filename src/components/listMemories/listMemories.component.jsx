import React from 'react'
import { MemoryCardLoader } from '../loaders/memoryCardLoader.component'
import { MemoryCard } from '../memoryCard/memoryCard.component'
import * as Styles from './listMemories.styles'


export const ListMemories = React.memo(({ memories, loading }) => {
    
    return (
        <Styles.Root>
            { !loading ? memories.map(memory => (
                <MemoryCard key={memory._id} { ...memory } />
            )) : (
                Array(6).fill().map((_, i) => <MemoryCardLoader />)
            )}
        </Styles.Root>
    )
})