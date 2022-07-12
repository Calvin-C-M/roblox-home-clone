import '../css/navbar.scss'
import { ReactComponent as RobloxLogo } from '../img/roblox-logo.svg'
import ProfilePicture from '../img/profile-picture.png'

import { BiMenu, BiSearch } from 'react-icons/bi'
import { IoCloseCircleOutline, IoSettingsOutline } from 'react-icons/io5'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BsCoin } from 'react-icons/bs'

import { useState } from 'react'

const Navbar = ({ profile }) => {
    const [showDeleteSearch,setShowDS]=useState(false)
    const [searchText,setSearchText]=useState("")

    const [showNotifications,setShowNotif]=useState(false)
    const [showRobux,setShowRobux]=useState(false)
    const [showSettings,setShowSettings]=useState(false)

    const iconSize=25;
    
    profile.picture={
        src: ProfilePicture,
        size:30
    }

    const deleteSearch = (inputId) => {
        const input=document.querySelector(`#${inputId}`)
        input.value=""
        setSearchText("")
        setShowDS(false)
    }

    const showNotifHandling = () => setShowNotif(!showNotifications)
    const showRobuxHandling = () => setShowRobux(!showRobux)
    const showSettingsHandling = () => setShowSettings(!showSettings)

    return (<nav className="nav">
        <div className="components">
            <div id="sidebar" className='items'>
                <button className="btn">
                    <BiMenu 
                        size={iconSize}
                    />
                </button>
                <a href='#'>
                    <RobloxLogo 
                        height={iconSize}
                        width={iconSize}
                        color="393b3d"
                    />
                </a>
            </div>
            <div id="lists" className='items'>
                <a href="#">Discover</a>
                <a href="#">Avatar Shop</a>
                <a href="#">Create</a>
                <a href="#">Robux</a>
            </div>
            <div id="search" className='items'>
                <BiSearch 
                    id='search-icon'
                    size={iconSize-5}
                />
                <input 
                    id="input-search"
                    placeholder='Search'
                    onChange={e => setSearchText(e.target.value)}
                    onFocus={() => setShowDS(true)}
                />
                {
                    (showDeleteSearch) ? 
                        <IoCloseCircleOutline 
                            id='delete-icon'
                            onClick={() => deleteSearch('input-search')}
                        />
                    : ""
                }
            </div>
        </div>
        <div className='components'>
            <div id="profile" className='items'>
                <img 
                    id="profile-picture"
                    src={profile.picture.src}
                    alt={profile.username}
                    width={profile.picture.size}
                    height={profile.picture.size}
                />
                <a href="#">
                    @{profile.username}
                </a>
            </div>
            <div id="menus" className='items'>
                <div id="notifications">
                    <button className='btn' onClick={showNotifHandling}>
                        <IoMdNotificationsOutline 
                            size={iconSize}
                        />
                    </button>
                    <div className="popups">
                        <div id="header">

                        </div>
                    </div>
                </div>
                <div id="robux">
                    <button className='btn' onClick={showRobuxHandling}>
                        <BsCoin 
                            size={iconSize}
                        />
                        <span>{profile.robux}</span>
                    </button>
                    <div className="popups">
                    
                    </div>
                </div>
                <div id="settings">
                    <button className='btn' onClick={showSettingsHandling}>
                        <IoSettingsOutline 
                            size={iconSize}
                        />
                    </button>
                    <div className="popups">
                        
                    </div>
                </div>
            </div>
        </div>
    </nav>);
}
 
export default Navbar;