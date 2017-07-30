import * as React from "react";
import {observer} from "mobx-react";
import {BrowserRouter, Link} from "react-router-dom";
import {Route} from "react-router";
import {AppManager} from "./AppManager";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import TopicsPage from "./pages/TopicsPage";

@observer
export default class App extends React.Component<{ appManager: AppManager }> {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/topics">Topics</Link></li>
                    </ul>

                    <hr/>

                    <Route exact path="/" render={() => <MainPage appManager={this.props.appManager}/>}/>
                    <Route path="/about" component={AboutPage}/>
                    <Route path="/topics" component={TopicsPage}/>
                </div>
            </BrowserRouter>
        );
    }
}
