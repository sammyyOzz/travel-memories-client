import React from 'react'
import { MemoryCardLoader } from '../loaders/memoryCardLoader.component'
import { MemoryCard } from '../memoryCard/memoryCard.component'
import * as Styles from './listMemories.styles'
import { AnimatedCard } from '../animation/animatedCard.component';


export const ListMemories = React.memo(({ memories, loading }) => {

    return !loading ? (
        <AnimatedCard>
            <Styles.Root>
                { memories.map(memory => (
                    <MemoryCard key={memory._id} { ...memory } />
                ))}
            </Styles.Root>
        </AnimatedCard>
    ) : (
        <Styles.Root>
            { Array(6).fill().map((_, i) => <MemoryCardLoader key={i} />) }
        </Styles.Root>
    )
})