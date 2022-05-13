import * as Styles from './memoryForDisplay.styles'


export function MemoryForDisplay({ _id, imageUrl, place, description, name }) {

    return (
        <Styles.Root>
            <Styles.Left>
                <Styles.Image src={"https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} />
                <Styles.Place>{ place }</Styles.Place>
                <Styles.Description>{ description }</Styles.Description>
                <Styles.Footer>{ `--${name}--` }</Styles.Footer>
            </Styles.Left>

            <Styles.Right>
                { Array(10).fill().map((_, i) => <Styles.Description>{ description }</Styles.Description>)}
            </Styles.Right>
        </Styles.Root>
    )
}