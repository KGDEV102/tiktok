import Siderbar from "./Sidebar";
import Header from "./Header";
function DefaultLayout({children}) {
    return ( 
        <div>
            <Header></Header>
            <div className="container">
                <Siderbar></Siderbar>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;