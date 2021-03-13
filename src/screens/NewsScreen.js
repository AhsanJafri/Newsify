import React, {Component} from 'react';
import {Container, Header, Item, Input, Icon, Button} from 'native-base';

import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  FlatList,
} from 'react-native';
import {FontStyles, images} from '../constants/assets';
const {height, width} = Dimensions.get('screen');
import LinearGradient from 'react-native-linear-gradient';
import {items} from '../assests/helper';
import {colors} from '../constants/themes';
import axios from 'axios';
const HEADER = height / 8;
const CONTENT = height - height / 8;
function DateFunc() {
  let a = new Date();
  return a.getDate() + '-' + a.getMonth() + '-' + a.getFullYear();
}
export class NewsScreen extends Component {
  constructor() {
    super();
    this.state = {
      selected: 'top-headlines',
      list: [],
    };
  }
  componentDidMount() {
    //   let a=Da
    axios
      .get(
        `https://newsapi.org/v2/everything?q=sports&from=${DateFunc()}&sortBy=popularity&apiKey=749c96ca705f4a4b8e3322b7dc6684cb`,
      )
      .then((response) => this.setState({list: response.data.articles}))
      .catch((e) => console.log(e));
  }

  handleTab = async (val) => {
    this.setState({selected: val});
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${val}&from=${DateFunc()}&sortBy=popularity&apiKey=749c96ca705f4a4b8e3322b7dc6684cb`,
      )
      .then((response) => this.setState({list: response.data.articles}))
      .catch((e) => console.log(e));
  };
  render() {
    const {selected} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: colors.WHITE}}>
        <StatusBar />
        <View style={{height: HEADER}}>
          <LinearGradient
            colors={[
              'rgba(0,0,200,0.7)',
              'rgba(0,0,180,0.6)',
              'rgba(0,0,160,0.5)',
            ]}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}>
            <Text
              style={{
                fontFamily: FontStyles.Comfortaa,
                fontSize: height * 0.07,
                color: colors.WHITE,
              }}>
              {' '}
              Newsify{' '}
            </Text>
          </LinearGradient>
        </View>
        <View style={{height: CONTENT}}>
          <ScrollView>
            <View
              style={{
                height: CONTENT / 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <FlatList
                horizontal
                data={items}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({item, index}) => {
                  return (
                    <TouchableOpacity
                      style={{
                        backgroundColor:
                          selected === item.val
                            ? colors.BLUE.DEFAULT
                            : colors.GREY.LIGHT,
                        borderRadius: 20,
                        marginHorizontal: 10,
                      }}
                      onPress={() => this.handleTab(item.val)}>
                      <Text
                        style={{
                          padding: 15,
                          fontFamily: FontStyles.Comfortaa,
                          fontSize: height * 0.02,
                          color:
                            selected === item.val ? colors.WHITE : colors.BLACK,
                        }}>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  );
                }}
              />
            </View>
            <FlatList
              data={this.state.list}
              keyExtractor={(item) => item.id}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{
                      marginVertical: 10,
                      alignSelf: 'center',
                    }}
                    onPress={() =>
                      this.props.navigation.navigate('DetailNews', {
                        item: item,
                      })
                    }>
                    <View
                      style={{
                        width: width / 1.1,
                      }}>
                      <Text
                        style={{
                          fontFamily: FontStyles.Comfortaa,
                          fontSize: height * 0.02,
                        }}>
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          fontFamily: FontStyles.Comfortaa,
                          fontSize: height * 0.02,
                          alignSelf: 'flex-end',
                        }}>
                        {'-'}
                        {item.author}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default NewsScreen;
