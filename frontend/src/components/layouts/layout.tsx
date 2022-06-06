import React, { useRef } from 'react';
import { Route, Switch } from 'react-router-dom';
import './layout.scss'
import { Main } from '../main/Main';
import { UiRoutes } from '../../lib/UiRoutes';

function LayoutComponent() {
    const data = useRef({topHeighPercent:10});
    return (
        <div id="layout" className="d-flex flex-column">
            <div className="d-flex" style={{height:`${data.current.topHeighPercent}%`}}>
            </div>
            <div className="" style={{height:`${100 - data.current.topHeighPercent}%`}}>
                <Switch>
                    <Route path={UiRoutes.Root} component={Main} />
                </Switch>
            </div>
            
        </div>
    )

}

export const Layout = React.memo(LayoutComponent);