import { BsSearch } from "react-icons/bs";
import { FaSpinner } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import React from 'react';

import 'tippy.js/dist/tippy.css'; 
import Tippy from '@tippyjs/react';
import { GrLanguage } from "react-icons/gr";
import { BsQuestionCircle } from "react-icons/bs";
import { FaRegKeyboard } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdOutlineCloudUpload } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { BsCoin } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { Wrapper as PopperWrapper } from "~/Layout/Popper";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import AccountItem from "~/Components/AccountItem/AccountItem";
import Button from "../Button/Button";
import Menu from "~/Layout/Popper/Menu/Menu";
const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        title: "English",
        icon: <GrLanguage />,
        children: {
            title: "Language",
            data: [
                {
                    type:"language",
                    code: "en",
                    title:"English"
                }, {
                    type:"language",
                    code: "vi",
                    title:"Tiếng Việt"
                }
            ]
        }
    },
    {
        title: "Feedback and help",
        icon: <BsQuestionCircle />,
        to:"/feedback"
    },
    {
        title: "Keyboards shortcuts",
        icon:   <FaRegKeyboard />
        
    }
]
const userMenu = [
    {
        icon:<FaRegUser />,
        title: "View profile",
        to:"/@kgdev"
    },
    {
        icon:<BsCoin />,
        title: "Get coin",
        to:"/coin"
    },
    {
        icon:<IoSettingsOutline />,
        title: "Setting",
        to:"/settings"
    },
    ...MENU_ITEMS,
    {
        icon:<IoIosLogOut />,
        title: "Log out",
        to: "/logout",
        separate:true
        
    },

]
const handleMenuChange = (menuItem) => {
    switch (menuItem) {
        case "language":
            //Handle
            break;
        default:

   }
}
const currentUser = true;
function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <img src={images.logo.default} />
                <Tippy
                    interactive
                    visible
                    placement="bottom-start"
                    
                  
                    render={attrs => (
                        
                        <div className={cx("search-result")} tabIndex="-1" {...attrs} > 
                            
                            <PopperWrapper>
                                <h4 className={cx("search-title")}>Accounts</h4>
                                 <AccountItem />
                                <AccountItem/>
                            </PopperWrapper>
                           
                            </div>
                       
                    )}
                >
                    
                    <div className={cx("search")}>
                        <input
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                        >
                        </input>
                        <button className={cx("clear")}>
                            <TiDelete/>
                        </button>
                        <button className={cx("loading")}>
                            <FaSpinner/>
                        </button>
                        <button className={cx("search-btn")}>
                            <BsSearch/>
                        </button>
                    </div>
               </Tippy>

                <div className={cx("action")}>
                    {currentUser ? (
                    <>
                       <Tippy content="Upload video" placement="bottom" trigger="click" >
                            <button className={cx("action-btn")}>
                                  <MdOutlineCloudUpload />  
                            </button >
                       </Tippy>
                       
                    </>
                    ): (
                        <>
                            <Button text >Up load</Button>
                            <Button primary >Sign up</Button>
                        </>
                    )}
                    <Menu items={currentUser ?userMenu :MENU_ITEMS} onChange={handleMenuChange}>
                    {currentUser ? (
                      
                            <img
                                src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/d5450dffd6596cb0302441b62d5c2663~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=8e71a4ef&x-expires=1753786800&x-signature=bSYPVvJ681nEP9ok7dwNb6AiYqs%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                                alt="illustation of human"
                                className={cx("user-avartar")}
                            >
                            </img>
                       
                    ): (
                          
                                 
                            <button className={cx("more-btn")}>
                                <BsThreeDotsVertical />
                            </button>
                        
                           
                        )}
                        </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;