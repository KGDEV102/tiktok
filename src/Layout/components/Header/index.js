import { BsSearch } from "react-icons/bs";
import { FaSpinner } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import React from 'react';
import Tippy from '@tippyjs/react/headless'; 

import { Wrapper as PopperWrapper } from "~/Layout/Popper";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import AccountItem from "~/Components/AccountItem/AccountItem";
import Button from "../Button/Button";
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <img src={images.logo.default} />
                <Tippy
                    interactive
                    visible
                    render={attrs => (
                        
                        <div className={cx("search-result")} tabIndex="-1" {...attrs}> 
                            
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
                    <Button primary>Sign up</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;