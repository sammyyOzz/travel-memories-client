import React from 'react'
import { MemoryCard } from '../memoryCard/memoryCard.component'
import * as Styles from './listMemories.styles'


export function ListMemories({ memories }) {

    return (
        <Styles.Root>
            { memories.map(memory => (
                <MemoryCard key={memory.id} { ...memory } />
            ))}
        </Styles.Root>
    )
}