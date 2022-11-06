import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return <SafeAreaView style={styles.container}>
          <View style={styles.divider}>
            <Text style={{ fontSize: "35pt", fontWeight: "bold",}}>Flare Up Tracker</Text>
            <TextInput
              style={styles.input}
              placeholder="Search"
            />
          </View>

          <View style={styles.bottom}>
            <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate('Flare Up Form')}>
              <Text style={{ fontSize: "40pt", fontWeight: "bold", color: "#2196f3" }}>+</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
}

function FlareUpForm() {
  return <SafeAreaView style={styles.container}>
          <View style={styles.divider}>
            <Text style={{ fontSize: "35pt", fontWeight: "bold",}}>Form</Text>
          </View>
        </SafeAreaView>
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Flare Up Tracker" component={HomeScreen}/>
        <Stack.Screen name="Flare Up Form" component={FlareUpForm}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: "5pt",
    borderColor: "#aaa",
    marginTop: 10
  },

  divider: {
    // flex: 0.5
  },

  container: {
    flex: 1,
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between"
  },

  addBtn: {
    borderWidth: 4,
    alignItems: "center",
    justifyContent: "center",
    width: 75,
    height: 75,
    borderColor: "#2196f3",
    borderRadius: "20pt",
    boxShadow: "10pt 10pt 5pt 12pt black"
  },

  bottom: {
    // flex: 0.5
  }

});
