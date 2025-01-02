import { useState } from 'react'
import './CollegeHome.css'
import Header from './Header'
import Sidebar from '../../common/components/sidebar/Sidebar'
import Header from '../../common/components/header/Header'
import Home from './Home'

function CollegeHome() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }

    return(
        <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar}/>
            <Sidebar openSidebarToggle={openSidebarToggleb } OpenSidebar={OpenSidebar}/>
        </div>
    )
}

ex