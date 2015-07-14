import { Route, DefaultRoute } from 'react-router';

import Main from '../components/Main';
import Dashboard from '../components/Dashboard';
import TestRoute from '../components/TestRoute';
import TestRoute2 from '../components/TestRoute2';
import About from '../components/About';

export default (
    <Route name="root" path="/" handler={Main}>
        <Route name="dashboard" handler={Dashboard} />
        <Route name="testroute" handler={TestRoute} />
        <Route name="testroute2" handler={TestRoute2} />
        <Route name="about" handler={About} />

        <DefaultRoute handler={Dashboard} />
    </Route>
);
