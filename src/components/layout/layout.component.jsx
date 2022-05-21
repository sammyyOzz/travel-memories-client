import { AnimatedPage } from '../animation/animatedPage.component'
import { Navbar } from '../navigation/navbar.component'
import { NewMemoryForm } from '../newMemoryForm/newMemoryForm.component'
import * as Styles from './layout.styles'

export function Layout({ children, hideSidePanel, removePadding }) {

    return (
        <AnimatedPage>
            <Styles.Root>
                <Styles.Left hideSidePanel={hideSidePanel}>
                    <Navbar />
                    <Styles.LeftBody>
                        <Styles.Container removePadding={removePadding}>
                            { children }
                        </Styles.Container>
                    </Styles.LeftBody>
                </Styles.Left>

                <Styles.Right hideSidePanel={hideSidePanel}>
                    <Styles.Container>
                        <NewMemoryForm />
                    </Styles.Container>
                </Styles.Right>
            </Styles.Root>
        </AnimatedPage>
    )
}