import * as React from "react";
import {observer} from "mobx-react";
import {RouteComponentProps} from "react-router";

export interface TopicPageUrlProps {
    topicId: string;
}

@observer
export default class TopicPage extends React.Component<RouteComponentProps<TopicPageUrlProps>> {
    render() {
        return (
            <div>
                <h3>
                    Topic: {this.props.match.params.topicId}
                </h3>
            </div>
        );
    }
}
