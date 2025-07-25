import Siderbar from "./Sidebar";
import Header from "../components/Header";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
const cx = classNames.bind(styles);
function DefaultLayout({children}) {
    return ( 
        <div>
            <Header></Header>
            <div className={cx("wrapper")}>
               
                <div className={cx("container")}>
                    <Siderbar></Siderbar>
                    <div className={cx("content")}>
                         {children}
                    </div>
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;