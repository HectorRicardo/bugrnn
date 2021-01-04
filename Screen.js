import React, {useEffect} from 'react';
import {Navigation} from 'react-native-navigation';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const Screen = ({componentId}) => {
  useEffect(() => {
    const unsubscribe = Navigation.events().registerComponentListener(
      {
        componentDidAppear: () =>
          console.log(`componentDidAppear ${componentId}`),
        componentDidDisappear: () =>
          console.log(`componentDidDisappear ${componentId}`),
      },
      componentId,
    );
    return () => unsubscribe.remove();
  }, [componentId]);
  return (
    <SafeAreaView style={styles.root}>
      <Text>Screen {componentId}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
});

export default Screen;
