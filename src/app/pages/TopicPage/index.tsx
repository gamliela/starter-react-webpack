import * as React from "react";
import {observer} from "mobx-react";

@observer
export default class TopicPage extends React.Component<{match: any}> {      // TODO: any??
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
