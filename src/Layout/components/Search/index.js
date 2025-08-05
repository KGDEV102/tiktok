
import { FaSpinner } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import 'tippy.js/dist/tippy.css'; 
import Tippy from '@tippyjs/react';
import { Wrapper as PopperWrapper } from "~/Layout/Popper";
import AccountItem from "~/Components/AccountItem/AccountItem";
import { SearchIcon } from "~/Layout/components/icons";
import { useEffect, useRef, useState } from "react";
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();
    const handleClear = () => {
        setSearchValue("");
        setSearchResult([]);
        inputRef.current.focus();
        
    }
    const handleHideResult = () => {
        setShowResult(false);
    }
    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then(res => res.json())
            .then(result => {
                setSearchResult(result.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            })
    },[searchValue])
    return (  
        <>
             <HeadlessTippy
                    interactive
                    visible={ showResult && searchResult.length > 0}
                    placement="bottom-start"
                    
                    onClickOutside={handleHideResult}
                    render={attrs => (
                        
                        <div className={cx("search-result")} tabIndex="-1" {...attrs} > 
                            
                            <PopperWrapper>
                                <h4 className={cx("search-title")}>Accounts</h4>
                                {searchResult.map(item => (
                                    <AccountItem data={item} key={item.id} />
                                ))}
                            </PopperWrapper>
                           
                            </div>
                       
                    )}
                >
                    
                    <div className={cx("search")}>
                        <input
                            placeholder="Search accounts and videos"
                        spellCheck={false}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        ref={inputRef}
                        onFocus={()=>{setShowResult(true)}}
                        >
                        </input>
                    {!!searchValue && !loading && (
                        <button className={cx("clear")}
                            onClick={handleClear}
                        >
                            <TiDelete/>
                        </button>
                       )}
                       {loading && ( <button className={cx("loading")}>
                            <FaSpinner/>
                        </button>)}
                        <button className={cx("search-btn")}>
                            {/* <BsSearch/> */}
                            <SearchIcon/>
                        </button>
                    </div>
               </HeadlessTippy>
        </>
    );
}

export default Search;