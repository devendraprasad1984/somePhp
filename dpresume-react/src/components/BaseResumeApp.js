import React from 'react'
import HeaderComponent from "./HeaderComponent";
import BottomComponent from "./BottomComponent";
import RightComponent from "./RightComponent";
import CenterComponent from "./CenterComponent";
import '../styles/BaseResumeApp.css'
import TopComponent from "./TopComponent";


class BaseResumeApp extends React.Component {
    render() {
        return (
            <div id="main_id" className="container-fluid">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <TopComponent/>
                            <HeaderComponent/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-10"><CenterComponent/></div>
                        <div className="col-lg-2"><RightComponent/></div>
                    </div>

                    <div className="row bottom_div ">
                        <div className="col-lg-12"><BottomComponent/></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BaseResumeApp

