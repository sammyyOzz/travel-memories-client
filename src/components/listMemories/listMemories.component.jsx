import React from 'react'
import { MemoryCardLoader } from '../loaders/memoryCardLoader.component'
import { MemoryCard } from '../memoryCard/memoryCard.component'
import * as Styles from './listMemories.styles'
import { AnimatedCard } from '../animation/animatedCard.component';
import PropTypes from 'prop-types'


export const ListMemories = React.memo(({ memories, loading }) => {

    return !loading ? (
        <AnimatedCard>
            <Styles.Root data-testid="list-memories">
                { memories.map(memory => (
                    <MemoryCard key={memory._id} { ...memory } />
                ))}
            </Styles.Root>
        </AnimatedCard>
    ) : (
        <Styles.Root>
            { Array(4).fill().map((_, i) => <MemoryCardLoader key={i} />) }
        </Styles.Root>
    )
})

ListMemories.propTypes = {
    memories: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}