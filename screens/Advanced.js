import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import back2 from "../images/img2.png";

import { Button, List } from "react-native-paper";

const Advanced = () => {
  const [expanded, setExpanded] = useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <View style={{ height: "100%" }}>
      <ImageBackground
        source={back2}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            fontSize: 40,
            marginTop: 80,
            color: "#FFF",
            fontWeight: "600",
            textAlign: "center",
            width: "100%",
          }}
        >
          {" "}
          Advanced Settings{" "}
        </Text>
        <Text
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            fontSize: 15,
            marginTop: 140,
            color: "#FFF",

            textAlign: "center",
            width: "100%",
          }}
        >
          Track the status of your UAV connection
        </Text>
        <View
          style={{
            width: "100%",
            position: "absolute",
            top: 0,
            marginTop: 180,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            mode="contained"
            icon="delete"
            color="#E74C3C"
            onPress={() => console.log("Delete Pressed!")}
          >
            Delete Session!
          </Button>
        </View>
        <View
          style={{
            width: "100%",
            marginTop: 240,
            flex: 1,
          }}
        >
          <ScrollView>
            <List.Section
              style={{
                marginLeft: 40,
                marginRight: 40,
                backgroundColor: "#fff",
              }}
            >
              <List.Accordion
                title="Position 1"
                left={(props) => <List.Icon {...props} icon="quadcopter" />}
              >
                <List.Item title={<Text>Hi</Text>} />
                <List.Item title="Second item" />
              </List.Accordion>

              <List.Accordion
                style={{ marginTop: 15 }}
                title="Position 2"
                left={(props) => <List.Icon {...props} icon="quadcopter" />}
              >
                <List.Item title="First item" />
                <List.Item title="Second item" />
              </List.Accordion>

              <List.Accordion
                style={{ marginTop: 15 }}
                title="Position 3"
                left={(props) => <List.Icon {...props} icon="quadcopter" />}
              >
                <List.Item title="First item" />
                <List.Item title="Second item" />
              </List.Accordion>

              <List.Accordion
                style={{ marginTop: 15 }}
                title="Position 4"
                left={(props) => <List.Icon {...props} icon="quadcopter" />}
              >
                <List.Item title="First item" />
                <List.Item title="Second item" />
              </List.Accordion>

              <List.Accordion
                style={{ marginTop: 15 }}
                title="Position 5"
                left={(props) => <List.Icon {...props} icon="quadcopter" />}
              >
                <List.Item title="First item" />
                <List.Item title="Second item" />
              </List.Accordion>

              <List.Accordion
                style={{ marginTop: 15 }}
                title="Position 6"
                left={(props) => <List.Icon {...props} icon="quadcopter" />}
              >
                <List.Item title="First item" />
                <List.Item title="Second item" />
              </List.Accordion>
            </List.Section>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Advanced;
