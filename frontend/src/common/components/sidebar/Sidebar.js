import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import SchoolIcon from '@mui/icons-material/School';
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar'>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <BsCart3  className='icon_header'/> SHOP
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <SidebarRow title="Colleges" Icon={SchoolIcon} />
                <SidebarRow title="Experts" Icon={AssignmentIndIcon} />
            </ul>
        </div>
    </aside>
  )
}

export default Sidebar