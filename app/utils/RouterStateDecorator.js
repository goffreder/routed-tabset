import { State } from 'react-router';

import assign from 'react/lib/Object.assign';

export default (Component) => {
    assign(Component.prototype, State);
};
