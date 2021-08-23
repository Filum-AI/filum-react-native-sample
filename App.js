import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  TextInput,
} from 'react-native';
import {filumAnalytics} from './analytics';

const Separator = () => <View style={styles.separator} />;

const App = () => {
  const [text, onChangeText] = React.useState('Default Username');
  const [trackEventName, onChangeEventName] = React.useState(
    'Default Event Tracked',
  );
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Filum React-Native Example</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Button
          title="Sign In"
          onPress={() => {
            filumAnalytics.identify('Testing React-Native User', {
              username: text,
              name: 'Harry Potter',
              weight: 35.5,
              email: 'the_boy_who_lived@gmail.com',
              phone: '+123 456 6789',
            });
            filumAnalytics.track('User Signed In', {
              name: text,
            });
            // DEV ONLY: Flush rightaway so that you will see the events in the debugger at once, comment it in PROD
            filumAnalytics.flush();
          }}
        />
      </View>
      <Separator />
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEventName}
          value={trackEventName}
        />
        <Button
          title="Send 5 Track Events"
          onPress={() => {
            for (let i = 0; i < 5; i++) {
              filumAnalytics.track(trackEventName, {
                name: 'Harry Potter',
                address: 'London, England',
                age: i + 11,
                weight: 35.5,
                true: true,
                false: false,
                null_key: null,
                object: {
                  a: 1,
                  b: 'abadsfasf',
                  boolean: false,
                  true: true,
                  float: 33.3,
                  null_sub: null,
                },
                list: [
                  {
                    a: 1,
                    b: 'abadsfasf',
                    boolean: false,
                    true: true,
                    float: 33.3,
                    null_sub: null,
                  },
                  {
                    a: 1,
                    b: 'abadsfasf',
                    boolean: false,
                    true: true,
                    float: 33.3,
                    null_sub: null,
                  },
                ],
                empty_dict: {},
                empty_list: [],
              });
            }
            // DEV ONLY: Flush rightaway so that you will see the events in the debugger at once, comment it in PROD
            filumAnalytics.flush();
          }}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.paragraph}>
          Sign Out will clean the stored Anonymous ID and User ID in the
          device's storage.
        </Text>
        <Text style={styles.paragraph}>
          Empty user_id in Track is expected until you Sign In again.
        </Text>
        <Button
          title="Sign Out"
          color="#f194ff"
          onPress={() => {
            Alert.alert('You have signed out!');
            filumAnalytics.track('User Signed Out', {
              name: text,
            });
            filumAnalytics.reset();
            // DEV ONLY: Flush rightaway so that you will see the events in the debugger at once, comment it in PROD
            filumAnalytics.flush();
          }}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>Example Buttons</Text>
        <View style={styles.fixToText}>
          <Button
            title="Left button"
            onPress={() => {
              filumAnalytics.track('Left Button Clicked', {
                name: 'Left Button',
                type: 'Button',
              });
              // DEV ONLY: Flush rightaway so that you will see the events in the debugger at once, comment it in PROD
              filumAnalytics.flush();
            }}
          />
          <Button
            title="Right button"
            onPress={() => {
              filumAnalytics.track('Right Button Clicked', {
                name: 'Right Button',
                type: 'Button',
              });
              // DEV ONLY: Flush rightaway so that you will see the events in the debugger at once, comment it in PROD
              filumAnalytics.flush();
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 24,
  },
  paragraph: {
    textAlign: 'left',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
