import { Outlet } from 'react-router'
import Navigation2 from '../components/Navigation2.jsx'

const SecondaryLayout = () => {
    return (
        <>
            <Navigation2 />
            <Outlet />
        </>
    )
}

export default SecondaryLayout