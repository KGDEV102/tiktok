
import React from 'react';

import 'tippy.js/dist/tippy.css'; 
import Tippy from '@tippyjs/react';
import { GrLanguage } from "react-icons/gr";
import { BsQuestionCircle } from "react-icons/bs";
import { FaRegKeyboard } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { BsCoin } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import routes from '~/config/routes';
import Image from "../Image";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import config from "~/config/index";
import Button from "../Button/Button";
import Menu from "~/layouts/Popper/Menu/Menu";
import { InboxIcon, MessageIcon, SearchIcon, UploadIcon } from "~/layouts/components/icons";
import Search from '../Search';

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
const number_messeage = 10;
const currentUser = true;
function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <Link to={config.routes.home}  className={cx("logo-link")}>
                    <img src={images.logo.default} />
                </Link>
                <Search/>

                <div className={cx("action")}>
                    {currentUser ? (
                    <>
                       <Tippy content="Upload video" placement="bottom" trigger="click" >
                            <button className={cx("action-btn")}>
                                    {/* <MdOutlineCloudUpload />   */}
                                    <UploadIcon/>
                                   
                                    
                            </button >
                        </Tippy>
                         <Tippy content="Message" placement="bottom" trigger="click" >
                            <button className={cx("action-btn")}>
                                 <MessageIcon />
                                </button>
                        </Tippy>
                        <Tippy content="Notifications" placement="bottom" trigger="click" >
                            <button className={cx("action-btn",)}>
                                <InboxIcon />
                                <span className={cx("number-msg")}>{number_messeage}</span>
                            </button>
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
                      
                            <Image
                                src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/d5450dffd6596cb0302441b62d5c2663~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=8e71a4ef&x-expires=1753786800&x-signature=bSYPVvJ681nEP9ok7dwNb6AiYqs%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                                alt="illustation of human"
                                className={cx("user-avartar")}
                                
                            >
                            </Image>
                       
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