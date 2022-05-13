import { useSelector } from 'react-redux'
import { selectMemoryForDisplay } from '../../redux/memories/memories.selectors'
import * as Styles from './memoryForDisplay.styles'


export function MemoryForDisplay() {
    const memory = useSelector(selectMemoryForDisplay)

    return (
        <Styles.Root>
            <Styles.Left>
                <Styles.Image src={memory?.imageUrl} />
            </Styles.Left>
        </Styles.Root>
    )
}