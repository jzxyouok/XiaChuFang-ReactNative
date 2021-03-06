/**
 * Created by apple on 17-6-8.
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import { HomeFragment } from './client/home/HomeFragment';
import {MarketFragment} from "./client/market/MarketFragment";
import {CollectFragment} from "./client/collect/CollectFragment";
import {MineFragment} from "./client/mine/MineFragment";

import Color from './res/values/colors/color';

export default class Index extends Component {
  static defaultProps = {
    selectedColor: Color.colorPrimary,
    normalColor: '#000000'
  };

  constructor(props){
    super(props);
    this.state = {
      tabList:[
        { title: '下厨房', fragment: <HomeFragment navigator={this.props.navigator}/>, iconNormal: require('./res/drawable/tab/xiachufang.png'), iconSelected: require('./res/drawable/tab/xiachufang_selected.png')},
        { title: '市集', fragment: <MarketFragment navigator={this.props.navigator}/>, iconNormal: require('./res/drawable/tab/makert.png'), iconSelected: require('./res/drawable/tab/makert_selected.png')},
        { title: '收藏', fragment: <CollectFragment navigator={this.props.navigator}/>, iconNormal: require('./res/drawable/tab/fav.png'), iconSelected: require('./res/drawable/tab/fav_selected.png')},
        { title: '信箱', fragment: <Text>ccc</Text>, iconNormal: require('./res/drawable/tab/community.png'), iconSelected: require('./res/drawable/tab/community_selected.png')},
        { title: '我', fragment: <MineFragment navigator={this.props.navigator}/>, iconNormal: require('./res/drawable/tab/self.png'), iconSelected: require('./res/drawable/tab/self_selected.png')},
      ],
      selectedTab: '下厨房'
    };
  }

  render(){
    return (
      <TabNavigator>
        {this.state.tabList.map((item, key) =>
          <TabNavigator.Item
            key={key}
            title={item.title}
            titleStyle={{color: this.props.normalColor}}
            selectedTitleStyle={{color: this.props.selectedColor}}
            renderIcon={() => <Image style={styles.tabIcon} source={item.iconNormal} resizeMode={'contain'}/>}
            renderSelectedIcon={() => <Image style={styles.tabIcon} source={item.iconSelected} resizeMode={'contain'}/>}
            onPress={() => this.setState({ selectedTab: item.title })}
            selected={this.state.selectedTab === item.title}>
            { item.fragment }
          </TabNavigator.Item>
        )}
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  tabIcon: {
    width: 25,
    height: 25
  }
});
