import React, { useCallback, useEffect } from 'react'
import { Button } from '../../components/button/button.component'
import { Layout } from '../../components/layout/layout.component'
import * as Styles from './home.styles'

import { ListMemories } from '../../components/listMemories/listMemories.component';

import { useDispatch, useSelector } from 'react-redux';
import { selectMemories } from '../../redux/memories/memories.selectors';
import { selectLoggedInUser } from '../../redux/auth/auth.selectors';
import { getMemories } from '../../redux/memories/memories.slice';
import { HTTP_STATUS } from '../../utils/constants/httpStatus.constant';
import { Link } from 'react-router-dom';

function Home() {
    /*************************************************************
     * selectors
     *************************************************************/
    const { data: memories, status } = useSelector(selectMemories)
    const { data: userData } = useSelector(selectLoggedInUser)


    /*************************************************************
     * dispatch
     *************************************************************/
    const dispatch = useDispatch()

    const _getMemories = useCallback(() => dispatch(getMemories()), [dispatch])

    /*************************************************************
     * hooks
     *************************************************************/
    useEffect(() => {
        if (status === null) {
            _getMemories()
        }
    }, [status, _getMemories])

    return (
        <Layout hideSidePanel={!userData?._id}>
            <Styles.Banner>
                <Styles.Title>Memories</Styles.Title>
                <Styles.Subtitle>Share your memories with others.</Styles.Subtitle>

                { !userData?._id && (
                    <Link to="/auth">
                        <Button>Log into your account</Button>
                    </Link>
                )}
            </Styles.Banner>

            <Styles.Title>Gallery</Styles.Title>
            <ListMemories memories={memories} loading={status === HTTP_STATUS.PENDING} />

        </Layout>
    )
}

export default Home