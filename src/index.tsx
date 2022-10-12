import { Provider } from 'react-redux';
import store from '@redux';
import Navigator from '@navigation';

/*
const App = () => {
    return (
        <Provider store={store}>
            <Navigator />
        </Provider>
    );
};
*/

const App = () => {
    return (
        <Navigator />
    );
};

export default App;
