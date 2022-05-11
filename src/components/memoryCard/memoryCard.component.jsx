import React from 'react';
import * as Styles from './memoryCard.styles'


export function MemoryCard({ url, place, description, name }) {

    return (
        <Styles.Root>
            <Styles.ImageContainer>
                <Styles.Image src={url} alt="" />
            </Styles.ImageContainer>
            <Styles.Place>{ place }</Styles.Place>
            <Styles.Description>{ description }</Styles.Description>
            <Styles.Footer>{ `--${name}--` }</Styles.Footer>
        </Styles.Root>
    )
}