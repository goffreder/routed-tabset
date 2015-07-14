import { TabbedArea, TabPane } from 'react-bootstrap';

import NavigationDecorator from '../utils/NavigationDecorator';
import RouterStateDecorator from '../utils/RouterStateDecorator';

@NavigationDecorator
@RouterStateDecorator
export default class RoutedTabset extends React.Component {
    static propTypes = {
        tabs: React.PropTypes.arrayOf(React.PropTypes.shape({
            label: React.PropTypes.string.isRequired,
            route: React.PropTypes.string.isRequired
        })).isRequired,
        defaultRoute: React.PropTypes.string
    };
    static contextTypes = {
        router: React.PropTypes.func
    };

    constructor() {
        super();

        this.handleSelect = this.handleSelect.bind(this);
    }

    componentWillMount() {
        if (this.props.defaultRoute) {
            this.transitionTo(this.props.defaultRoute);
        }
    }

    handleSelect(key) {
        this.transitionTo(this.props.tabs[key].route);
    }

    render() {
        let activeKey;

        const tabs = this.props.tabs.map((tab, index) => {
            if (this.getPath() === `/${tab.route}`) {
                activeKey = index;
            }

            return <TabPane key={index} eventKey={index} tab={tab.label} />;
        });

        return (
            <TabbedArea activeKey={activeKey} onSelect={this.handleSelect}>
                {tabs}
            </TabbedArea>
        );
    }
}
