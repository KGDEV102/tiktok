import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Following";
import Following from "./pages/Home";
import { publicRoutes } from "./routes";
import { DefaultLayout } from "./Layout";
import { Fragment } from "react";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            let Layout = DefaultLayout;
            if (route.Layout) {
              Layout = route.Layout;
            } else if (route.Layout === null) {
              Layout = Fragment;
            }
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
            
         })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
