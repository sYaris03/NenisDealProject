
import {createDrawerNavigator} from '@react-navigation/drawer'
import Perfil from '../components/Perfil';

const Drawer=createDrawerNavigator();

export function DrawerNavigation () {
    return (
    <Drawer.Navigator>
        <Drawer.Screen component={Perfil} name='Perfil'></Drawer.Screen>
    </Drawer.Navigator>
    )
}
