import React, { useState } from "react";
import {
  Animated,
  Easing,
  TouchableOpacity,
} from "react-native";

const Toggle = (props) => {

  const [isOn, setOn] = useState(props.isOn);
  const [animatedValue] = useState(new Animated.Value(0));

  const handlePress = () => {
    setOn(!isOn);
    props.onToggle(isOn);
 
    Animated.timing(
      animatedValue,
      {
        toValue: isOn ? 0 : 32,
        duration: 250,
        easing: Easing.linear,
        delay: 0,
      }
    ).start()
  }
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          backgroundColor: isOn ? "limegreen" : "gray",
          width: 64,
          height: 32,
          borderRadius: 32,
          padding: 4,
        }}
        onPress={() => handlePress()}
      >
        <Animated.View style={{
          backgroundColor: 'white',
          width: 24,
          height: 24,
          borderRadius: 32,
          transform: [{
            translateX: animatedValue,
          }]
        }} />
      </TouchableOpacity>
    )
}

export default Toggle;