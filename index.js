import {Navigation} from 'react-native-navigation';
import Screen from './Screen';

Navigation.registerComponent('Screen', () => Screen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    bottomTab: {
      selectedTextColor: 'red',
    },
  });

  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BottomTabs',
        options: {
          bottomTabs: {
            currentTabId: 'Screen2',
          },
        },
        children: [
          {
            component: {
              id: 'Screen1',
              name: 'Screen',
              options: {
                bottomTab: {
                  text: 'Screen 1',
                },
              },
            },
          },
          {
            component: {
              id: 'Screen2',
              name: 'Screen',
              options: {
                bottomTab: {
                  text: 'Screen 2',
                },
              },
            },
          },
        ],
      },
    },
  });
});
