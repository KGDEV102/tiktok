import Following from "~/pages/Home";
import Home from "~/pages/Following";
import Upload from "~/pages/Upload";
import Profile from "~/pages/Profile";

import config from "../config/index";
import { HeaderOnly } from "~/Layout";

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path:config.routes.following, component: Following },
    { path:config.routes.profile,component:Profile},
    { path: config.routes.upload, component: Upload,Layout:HeaderOnly }
    
];
const privateRoutes = [

];
export { publicRoutes, privateRoutes };