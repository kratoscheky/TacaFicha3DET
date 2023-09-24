import {BrowserRouter as Router, Route, Routes as Routess} from 'react-router-dom';
import {Home} from "../pages/Home/index.jsx";
import {ShareView} from "../pages/ShareView/index.jsx";


export const Routes = () => {
  return (
    <>
      <Router>
        <Routess>
          <Route path="/" element={<Home />} />
          <Route path="/shareview" element={<ShareView />} />
        </Routess>
      </Router>
    </>
  )
}