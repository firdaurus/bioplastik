import React, { useState } from "react"

import { FaChevronDown } from "react-icons/fa";
import { GiExitDoor } from "react-icons/gi";

import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material"

import logoPudak from "../../assets/images/logos/pudak.png"
import logoUM from "../../assets/images/logos/um.png"
import defaultAvatar from "../../assets/images/default-avatar.jpeg"

export default function Header() {

	const [ anchorEl, setAnchorEl ] = useState<null | HTMLElement>(null);
	
	const isDropdownOpen = Boolean(anchorEl)

	const handleOpenDropdown = (e: React.MouseEvent<HTMLDivElement>) => {
		setAnchorEl(e.currentTarget);
	}


	const handleCloseDropdown = () => {
		setAnchorEl(null);
	}

	return (
		<div className="w-full flex justify-between px-6 py-3 bg-white border-b-4 border-sky-500 montserrat">
			<div className="flex items-center gap-2">
				<img src={logoPudak} alt="logo pudak" className="w-16" />
                <span className="w-0.5 bg-black h-full" />
                <img src={logoUM} alt="logo um" className="w-8" />
			</div>
            <div className="flex justify-end">
				{/* avatar */}
				<div className="relative">
					<div className="flex items-center gap-2" onClick={ handleOpenDropdown }>
						<img src={ defaultAvatar } alt="avatar" className="w-8 h-8 rounded-full" />
						<FaChevronDown className="text-gray-700" />
					</div>

					<Menu anchorEl={ anchorEl } open={isDropdownOpen} onClose={ handleCloseDropdown }>
						<MenuItem>
							<ListItemIcon><GiExitDoor /></ListItemIcon>
							<ListItemText>Logout</ListItemText>
						</MenuItem>
					</Menu>
				</div>
			</div>
		</div>
	);
}
