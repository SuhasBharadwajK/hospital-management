import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Dashboard from '../components/dashboard';
import Billing from '../components/billing';
import Main from '../components/main';

const MainScreenStack = createStackNavigator({
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            headerShown: false,
        }
    },
    Billing: {
        screen: Billing,
        navigationOptions: {
            headerShown: false,
        }
    },
});

export default createAppContainer(MainScreenStack);
