import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import { FaCheckCircle } from "react-icons/fa";
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx("account-item")}>
            <img
                src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/d5450dffd6596cb0302441b62d5c2663~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=8e71a4ef&x-expires=1753786800&x-signature=bSYPVvJ681nEP9ok7dwNb6AiYqs%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                alt=""
                className={cx("avatar")}
            ></img>
            <div className={cx("item-infor")}>
                <p className={cx("nickname")}>
                    <strong>KGDEV</strong>
                    <FaCheckCircle className={ cx("check")} />
                </p>
                <p className={cx("name")}>Phan Nguyễn Anh Kiệt</p>
            </div>

        </div>
      );
}

export default AccountItem;