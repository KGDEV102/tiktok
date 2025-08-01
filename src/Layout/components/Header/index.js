import { BsSearch } from "react-icons/bs";
import { FaSpinner } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import React from 'react';
import Tippy from '@tippyjs/react/headless'; 
import { GrLanguage } from "react-icons/gr";
import { BsQuestionCircle } from "react-icons/bs";
import { FaRegKeyboard } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

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
const handleMenuChange = (menuItem) => {
    switch (menuItem) {
        case "language":
            //Handle
            break;
        default:

   }
}
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
                    <Button text >Up load</Button>
                    <Button outline rounded >Sign up</Button>
                    <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                        <button className={cx("more-btn")}>
                            <BsThreeDotsVertical />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;