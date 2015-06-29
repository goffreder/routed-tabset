import { TabbedArea, TabPane } from 'react-bootstrap';

import NavigationDecorator from '../utils/NavigationDecorator';

@NavigationDecorator
export default class RoutedTabset extends React.Component {
    static propTypes = {
        tabs: React.PropTypes.arrayOf(React.PropTypes.shape({
            label: React.PropTypes.string.isRequired,
            route: React.PropTypes.string.isRequired
        })).isRequired
    };
    static contextTypes = {
        router: React.PropTypes.func
    };

    constructor() {
        super();

        this.state = {
            key: 0
        };

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(key) {
        this.transitionTo(this.props.tabs[key].route);
        this.setState({
            key
        });
    }

    render() {
        const tabs = this.props.tabs.map((tab, index) => {
            return <TabPane key={index} eventKey={index} tab={tab.label} />;
        });

        return (
            <TabbedArea activeKey={this.state.key} onSelect={this.handleSelect}>
                {tabs}
            </TabbedArea>
        );
    }
}
