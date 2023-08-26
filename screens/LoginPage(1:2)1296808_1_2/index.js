import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/975267b4-bb2d-46b4-a22d-10a12e7b1a8e"
        }}
        style={styles.ImageBackground_1_3}
      />
      <View style={styles.View_1_4} />
      <View style={styles.View_1_5} />
      <View style={styles.View_1_6}>
        <Text style={styles.Text_1_6}>Name</Text>
      </View>
      <View style={styles.View_1_10}>
        <Text style={styles.Text_1_10}>Password</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_1_15}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("1_17"))
        }
      />
      <View style={styles.View_1_16}>
        <Text style={styles.Text_1_16}>sign up</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("102%") },
  ImageBackground_1_3: {
    width: wp("52%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("14%")
  },
  View_1_4: {
    width: wp("55%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("30%"),
    backgroundColor: "rgba(240, 238, 238, 1)"
  },
  View_1_5: {
    width: wp("55%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("43%"),
    backgroundColor: "rgba(240, 238, 238, 1)"
  },
  View_1_6: {
    width: wp("14%"),
    minWidth: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("31%"),
    justifyContent: "center"
  },
  Text_1_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_10: {
    width: wp("24%"),
    minWidth: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("44%"),
    justifyContent: "center"
  },
  Text_1_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_1_15: {
    width: wp("55%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("63%"),
    backgroundColor: "rgba(240, 238, 238, 1)"
  },
  View_1_16: {
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("64%"),
    justifyContent: "center"
  },
  Text_1_16: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
