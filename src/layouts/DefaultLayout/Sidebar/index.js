import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import Menu, { MenuItem } from "./Menu";
import config from "~/config";
import { HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, UserGroupActiveIcon, UserGroupIcon } from "~/layouts/components/icons";
const cx = classNames.bind(styles);
function Siderbar() {
    return (
        <aside className={cx("wrapper")}>
          
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon/> } activeIcon={<HomeActiveIcon/>} ></MenuItem>
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon/>} activeIcon={<UserGroupActiveIcon/>}></MenuItem>
                <MenuItem title="For You" to={config.routes.live} icon={<LiveIcon/>} activeIcon={<LiveActiveIcon/>}></MenuItem>
            </Menu>
        
        </aside>
    );
}

export default Siderbar;