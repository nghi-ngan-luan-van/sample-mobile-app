import { StackActions } from '@react-navigation/native';

export default class Navigation {
    constructor(navigation) {
        this.navigation = navigation;
        this.routeMap = {};
    }

    setOptions(options) {
        this.navigation.setOptions(options);
    }

    navigate(route, name = 'Stack') {
        if (!this.routeMap[route]) {
            this.routeMap[route] = true;
            const navigateRoute = {
                ...route,
                options: route.options || {}
            };
            this.navigation.navigate({
                name,
                key: `${name}_${new Date().getTime()}`,
                params: {
                    ...navigateRoute
                }
            });

            /**
             * handle opening many screen (duplicate screen) when navigate screen
             */
            setTimeout(() => {
                this.routeMap[route] = false;
            }, 500);
        }
    }

    present = (route) => {
        this.navigate(route, 'Modal');
    }

    show = (route) => {
        this.navigate(route, 'Dialog');
    }

    showBottom = (route) => {
        // eslint-disable-next-line no-param-reassign
        route.position = 'bottom';
        this.navigate(route, 'Dialog');
    }

    dismiss = () => {
        const action = StackActions.pop(1);
        this.navigation.dispatch(action);
    }
}
