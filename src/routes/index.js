import Following from "~/pages/Home";
import Home from "~/pages/Following";
import Upload from "~/pages/Upload";
import Profile from "~/pages/Profile";
import routes from "~/config/routes";
import { HeaderOnly } from "~/Layout";

const publicRoutes = [
    { path: routes.home, component: Home },
    { path:routes.following, component: Following },
    { path:routes.profile,component:Profile},
    { path: routes.upload, component: Upload,Layout:HeaderOnly }
    
];
const privateRoutes = [

];
export { publicRoutes, privateRoutes };