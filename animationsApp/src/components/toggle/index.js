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
    props.onToggle(!isOn);
 
    Animated.timing(
      animatedValue,
      {
        toValue: isOn ? 0 : 34,
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
          backgroundColor: isOn ? "#A9D4FC" : "#CFCFCF",
          width: 64,
          height: 32,
          borderRadius: 32,
          justifyContent:'center'
        }}
        onPress={() => handlePress()}
      >
        <Animated.View style={{
          backgroundColor: isOn ? "#1E88E5" : "white",
          width: 29,
          height: 29,
          borderRadius: 32,
          transform: [{
            translateX: animatedValue,
          }]
        }} />
      </TouchableOpacity>
    )
}

export default Toggle;