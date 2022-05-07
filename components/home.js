import Billing from "./billing";
import Dashboard from "./dashboard";

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function Home() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Dashboard" component={Dashboard} />
            <Drawer.Screen name="Billing" component={Billing} />
        </Drawer.Navigator>
    );
}