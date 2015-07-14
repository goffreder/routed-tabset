import { RouteHandler } from 'react-router';

import RoutedTabset from './RoutedTabset';

export default class Main extends React.Component {
    render() {
        const tabs = [{
            label: 'Dashboard',
            route: 'dashboard'
        }, {
            label: 'Test Route',
            route: 'testroute'
        }, {
            label: 'About',
            route: 'about'
        }];

        return (
            <div>
                <RoutedTabset tabs={tabs} defaultRoute="about" />
                <RouteHandler />
            </div>
        );
    }
}
