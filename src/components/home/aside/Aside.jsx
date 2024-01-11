import React, { useState } from 'react'
import "./Aside.css"
import { NavLink } from 'react-router-dom';
import { InlineMath } from 'react-katex'
import { sumTransformDependencies } from 'mathjs';

function Aside() {
    const handleClose = () => {
        document.querySelector("aside").style.display = "none"
    }

    return (
        <aside>
            <div className="top">
                <div className="logo">
                    <h2 className="danger"><InlineMath math='\mathbf{\sum}' /></h2>
                    <h2>CODE<span className="danger">X</span></h2>
                </div>
                <div className="close" id="close-btn" onClick={handleClose}>
                    <span className="material-icons-sharp"> close </span>
                </div>
            </div>

            <div className="sidebar">
                <NavLink to="/rootsOfEquation" className="anchor">
                    <span className="material-icons-sharp">
                        drag_handle
                    </span>
                    <h3>Roots Of Equation</h3>
                </NavLink>
                <NavLink to="/simultaneousEquation" className="anchor" activeclassname="active">
                    <span className="material-icons-sharp">layers</span>
                    <h3>Simultaneous Equation</h3>
                </NavLink>
                <NavLink to="/diffenentialEquation" className="anchor"  >
                    <span className="material-icons-sharp">functions</span>
                    <h3>Differential Equation</h3>
                </NavLink>
                <NavLink to="/integration" className="anchor"  >
                    <span className="material-icons-sharp">area_chart</span>
                    <h3>Integration</h3>
                </NavLink>
                <NavLink to="/curveFitting" className="anchor"  >
                    <span className="material-icons-sharp">trending_up</span>
                    <h3>Curve Fitting</h3>
                </NavLink>
                <NavLink to="/regressionAnalysis" className="anchor"  >
                    <span className="material-icons-sharp">scatter_plot</span>
                    <h3>Regression Analysis</h3>
                </NavLink>
                <NavLink to="/statistics" className="anchor"  >
                    <span className="material-icons-sharp">bar_chart</span>
                    <h3>Statistics</h3>
                </NavLink>
                <NavLink to="/settings" className="anchor"  >
                    <span className="material-icons-sharp">settings</span>
                    <h3>Settings</h3>
                </NavLink>
                <NavLink to="/logout" className="anchor"  >
                    <span className="material-icons-sharp">logout</span>
                    <h3>Logout</h3>
                </NavLink>
            </div>
        </aside>
    )
}

export default Aside