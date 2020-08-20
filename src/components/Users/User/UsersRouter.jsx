import React from "react";
import {Route} from "react-router-dom";
import Kabal from "./Kabal";
import SubZeroMK3 from "./SubZeroMK3";

const UsersRouter = () => {
    return (
        <div>
            <Route path='/user/Kabal'
                   render={() => <Kabal
                   />}/>
            <Route path='/user/Sub_Zero_MK3'
                   render={() => <SubZeroMK3
                   />}/>
            {/*<Route path='/user/Shang_Tsung'
                   render={() => <ShangTsung
                   />}/>*/}
            {/*<Route path='/user/Scorpion'
                   render={() => <Scorpion
                   />}/>*/}
        </div>
    )
}

export default UsersRouter;
