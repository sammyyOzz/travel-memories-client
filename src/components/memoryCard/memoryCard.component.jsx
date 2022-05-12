import React from 'react';
import * as Styles from './memoryCard.styles'
import { baseUrl } from '../../utils/services/axios'


export function MemoryCard({ imageUrl, place, description, user: { name } }) {

    return (
        <Styles.Root>
            <Styles.ImageContainer>
                <Styles.Image src={`${baseUrl}/images/${imageUrl}`} alt="" />
            </Styles.ImageContainer>
            <Styles.Place>{ place }</Styles.Place>
            <Styles.Description>{ description }</Styles.Description>
            <Styles.Footer>{ `--${name}--` }</Styles.Footer>
        </Styles.Root>
    )
}