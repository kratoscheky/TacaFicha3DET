import {BrowserRouter as Router, Route, Routes as Routess} from 'react-router-dom';
import {Home} from "../pages/Home/index.jsx";
import {ShareView} from "../pages/ShareView/index.jsx";
import {Sobre} from "../pages/Sobre/index.jsx";
import {Colaboradores} from "../pages/Colaboradores/index.jsx";
import {Layoult} from "../pages/Layoult/index.jsx";
import {Showcase} from "../pages/Showcase/index.jsx";
import {HomeAlpha} from "../pages/HomeAlpha/index.jsx";


export const Routes = () => {
  return (
    <>
      <Router>
        <Routess>
          <Route path='/' element={<Layoult />}>
            <Route path="/" element={<Home />} />
            <Route path='/Alpha' element={<HomeAlpha />} />
            <Route path="/shareview" element={<ShareView />} />
            <Route path="/shareview/:id" element={<ShareView />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/colaboradores" element={<Colaboradores />} />
            <Route path="/showcase" element={<Showcase />} />
          </Route>
        </Routess>
      </Router>
    </>
  )
}