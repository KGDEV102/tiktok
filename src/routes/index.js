import Following from "~/pages/Home";
import Home from "~/pages/Following";
import Upload from "~/pages/Upload";
import { HeaderOnly } from "~/Layout";

const publicRoutes = [
    { path: "/", component: Home },
    { path: "/following", component: Following },
    { path: "/upload", component: Upload,Layout:HeaderOnly }
    
];
const privateRoutes = [

];
export { publicRoutes, privateRoutes };