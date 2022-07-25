import React, { useEffect, useState } from 'react'
import SidebarButton from "./sidebarButton";
import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
import './Sidebar.css'
import apiClient from '../../spotify';


export default function Sidebar() {


  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {
      setImage(response.data.images[0].url);
    });
  }, []);
  
  return (
    <div className='sidebar-container'>
      <img 
        src={image}
        className='profile-img'
        alt='profile'
      />
      <div>
        <SidebarButton title="Artists" to="/artists" icon={<MdSpaceDashboard />} />
        <SidebarButton title="New playlist" to="/createPlaylist" icon={<FaGripfire />} />

        {/* <SidebarButton title="Player" to="/player" icon={<FaPlay />} /> */}
        <SidebarButton
          title="My playlists"
          to="/myPlaylists"
          icon={<MdFavorite />}
        />
        <SidebarButton title="Library" to="/" icon={<IoLibrary />} />
      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt />} />
    </div>
  );
}
