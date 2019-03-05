import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native';

type Props = {
  title: string,
  onPress: () => void
}

class FilledButton extends React.Component<Props> {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.props.onPress}>
          <Text>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}


export default FilledButton