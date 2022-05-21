import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectLoggedInUser } from '../../redux/auth/auth.selectors'

export function Private({ children }) {
    const { data: userData } = useSelector(selectLoggedInUser)

    return userData?._id ? children : <Navigate to="/auth" />
}