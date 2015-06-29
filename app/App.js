import 'normalize-css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Router from 'react-router';
import AppRoutes from './config/routes';

Router.create({
    routes: AppRoutes
}).run((Handler) => {
    React.render(<Handler/>, document.body);
});
