import React from 'react'
import { View, Text } from 'react-native';
import FilledButton from './FilledButton'
import { connect } from 'react-redux';
import actions, { AppActions } from '../actions';
import { AppProps } from '../reducers';

class Calculator extends React.Component<AppProps & AppActions> {

  increase = () => {
    this.props.increaseInRedux()
  }

  decrease = () => {
    this.props.decreaseInRedux()
  }

  render() {
    return (
      <View>
        <Text>{this.props.n}</Text>
        <FilledButton title="Increase" onPress={this.increase} />
        <FilledButton title="Decrease" onPress={this.decrease} />
      </View>
    )
  }
}

const getter = (state: any) => {
  return state // { n: 0 }
}

const setter = {
  increaseInRedux: actions.increaseInRedux,
  decreaseInRedux: actions.decreaseInRedux,
}


export default connect(getter, setter)(Calculator)