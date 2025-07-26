import { BsSearch } from "react-icons/bs";
import { FaSpinner } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx("wrapper")}>
            <div className={cx("inner")}>
                <img src={images.logo.default} />
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

                <div className={cx("action")}>

                </div>
            </div>
        </header>
    );
}

export default Header;