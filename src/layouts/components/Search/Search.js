
import { FaSpinner } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import 'tippy.js/dist/tippy.css'; 
import  PopperWrapper  from "~/layouts/Popper/Wrapper/";
import AccountItem from "~/Components/AccountItem/AccountItem";
import { SearchIcon } from "~/layouts/components/icons";
import { useEffect, useRef, useState } from "react";
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { useDebounce } from "~/hooks";
import { search } from "~/Services/searchService";
const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const debounced = useDebounce(searchValue, 500);
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
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
        //     .then(res => res.json())
        //     .then(result => {
        //         setSearchResult(result.data);
        //         setLoading(false);
        //     })
        //     .catch(() => {
        //         setLoading(false);
        //     })
        const fetchApi = async () => {
            const result = await search(debounced);
            setSearchResult(result);
            setLoading(false);
        }
        fetchApi();
    }, [debounced])
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    }
    return (  
        <>
            {/* Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.  */}
             <div>
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
                            onChange={handleChange}
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
                            <button className={cx("search-btn")} onMouseDown={(e)=>{e.preventDefault()}}>
                                {/* <BsSearch/> */}
                                <SearchIcon/>
                            </button>
                        </div>
                   </HeadlessTippy>
             </div>
        </>
    );
}

export default Search;