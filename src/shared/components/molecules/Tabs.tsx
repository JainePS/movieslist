import React, {ReactNode} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type TabsProps = {
  tabs: string[];
  selectedTab: number;
  onPress: (tabIndex: number) => void;
  children: ReactNode;
};

const Tabs = ({tabs, selectedTab, onPress, children}: TabsProps) => {
  const borderBottom = (selected: number, index: number) => {
    return selected === index ? 2 : 0;
  };

  return (
    <View>
      <View style={styles.tabsContainer}>
        {tabs.map((tab, index) => {
          return (
            <TouchableOpacity
              key={`${tab}-${index}`}
              onPress={() => {
                onPress(index);
              }}>
              <View
                style={[
                  styles.tab,
                  {borderBottomWidth: borderBottom(selectedTab, index)},
                ]}>
                <Text style={styles.tabTitle}>{tab}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  tabsContainer: {
    width: '100%',
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabTitle: {
    fontFamily: 'Satoshi',
    fontSize: 14,
    fontWeight: '500',
    color: 'black',
  },
  tab: {
    width: 186,
    height: 36,
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 0.187,
  },
});

export default Tabs;
