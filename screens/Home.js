import React from "react";
import NetInfo from "@react-native-community/netinfo";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import styled from "styled-components/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

//images
import back1 from "../images/img2.png";
import { LinearProgress } from "@rneui/base";

// import "react-circular-progressbar/dist/styles.css";

const Home = () => {
  //usestate hook
  const [connectiontype, setConnectiontype] = useState("");
  const [isconnected, setIsconnected] = useState("");
  const [strength, setStrength] = useState();
  const [ipaddress, setIpAddress] = useState("");
  const [frequency, setFrequency] = useState();
  const [connState, setConnState] = useState(false);
  const [conName, setConName] = useState("");
  const [subnet, setSubnet] = useState("");
  const [wifien, setWifien] = useState("");
  const [inter, setInter] = useState("");

  NetInfo.fetch().then((state) => {
    console.log("Connection type", state.type);
    console.log("Is connected?", state.isConnected);
    console.log("Strength: ", state.details.strength);
    console.log("IP address", state.details.ipAddress);
    console.log("Frequency", state.details.frequency);
    console.log("new", state.details.subnet);
    console.log("new", state.isInternetReachable);
    console.log("new", state.isWifiEnabled);

    setStrength(state.details.strength);
    setConnectiontype(state.type);

    function internet() {
      if (state.isInternetReachable === true) {
        setInter("Yes");
      } else {
        setInter("No");
      }
    }
    internet();

    function enabled() {
      if (state.isWifiEnabled === true) {
        setWifien("Yes");
      } else {
        setWifien("No");
      }
    }

    enabled();

    function type() {
      if (state.isConnected === true) {
        setIsconnected("True");
      } else {
        setIsconnected("False");
      }
    }

    type();

    setIpAddress(state.details.ipAddress);
    setFrequency(state.details.frequency);
    setSubnet(state.details.subnet);

    function statecon() {
      if (state.type === "wifi") {
        setConnState(true);
        setConName("Wi-Fi");
      } else {
        setConnState(false);
        setConName("Other");
      }
    }

    statecon();

    console.log(connState);
  });

  const Container = styled.View`
    height: 100%;
  `;
  const Topsection = styled.View`
    display: flex;
    flex-direction: column;
  `;
  const Bottomsection = styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto;
    margin-left: 55px;
    margin-right: 50px;
  `;

  const Title = styled.Text`
    font-size: 50px;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 25%;
    margin-left: 30px;
    color: white;
    font-weight: bold;
  `;

  const Prog = styled.Text`
    font-weight: bold;
    font-size: 50px;
    color: white;
  `;

  const Sub = styled.Text`
    font-size: 12px;
    color: white;
  `;

  const ConnState = styled.Text`
    position: absolute;
    top: 0;
    left: 0;
    font-size: 18px;
    padding: 10px;
    border-radius: 10px;
    margin-top: 40%;
    margin-left: 30px;
    height: 40px;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    background-color: lightgreen;
  `;

  const ConnStateNeg = styled.Text`
    position: absolute;
    top: 0;
    left: 0;
    font-size: 18px;
    padding: 10px;
    border-radius: 10px;
    margin-top: 40%;
    margin-left: 30px;
    height: 40px;
    color: white;
    font-weight: 600;
    text-transform: uppercase;
    background-color: red;
  `;
  return (
    <Container>
      <ImageBackground
        source={back1}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        {/* <Text> Strength {strength}</Text>
        <Text> Connection Type {connectiontype}</Text>
        <Text> Is connected?{isconnected} </Text>
        <Text> IP Address {ipaddress} </Text>
        <Text> Frequency {frequency} Hz </Text> */}
        <View style={{ height: "100%" }}>
          <Topsection>
            <Title>DroneNet</Title>
            {connState ? (
              <ConnState>Connected</ConnState>
            ) : (
              <ConnStateNeg>Not Connected</ConnStateNeg>
            )}

            <View
              style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                width: 150,
                height: 150,
                position: "absolute",
                top: 0,
                right: 0,
                display: "flex",
                flexDirection: "column",
                marginTop: 70,
                marginRight: 20,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Prog>{strength}%</Prog>
              <Sub>Strength</Sub>
            </View>
          </Topsection>
          <Bottomsection>
            <View
              style={{
                display: "flex",
                maxWidth: "75%",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 350,
              }}
            >
              <View
                style={{
                  width: 150,
                  height: 150,
                  backgroundColor: "#FFF",
                  marginTop: -100,
                  borderRadius: 15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialIcons
                  name="network-wifi"
                  size={40}
                  color="#5DADE2"
                  style={{
                    backgroundColor: "white",
                    padding: 10,
                    borderRadius: 70,
                    borderColor: "#5DADE2",
                    borderWidth: 1,
                    marginBottom: 4,
                  }}
                />
                <Text style={{ color: "gray", fontSize: 13 }}>
                  Wi-Fi Enabled?
                </Text>
                <Text style={{ fontSize: 17 }}>{wifien}</Text>
              </View>
              <View
                style={{
                  width: 150,
                  height: 150,
                  backgroundColor: "#FFF",
                  marginTop: -100,
                  borderRadius: 15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign
                  name="wifi"
                  size={40}
                  color="#A569BD"
                  style={{
                    backgroundColor: "white",
                    padding: 6,
                    borderRadius: 50,
                    borderColor: "#A569BD",
                    borderWidth: 1,
                    marginBottom: 4,
                  }}
                />
                <Text style={{ color: "gray", fontSize: 13 }}>
                  Connection Type
                </Text>
                <Text style={{ fontSize: 17 }}>{conName}</Text>
              </View>
            </View>
            <View
              style={{
                display: "flex",
                maxWidth: "75%",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 130,
              }}
            >
              <View
                style={{
                  width: 150,
                  height: 150,
                  backgroundColor: "#FFF",
                  marginTop: -100,
                  borderRadius: 15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SimpleLineIcons
                  name="globe"
                  size={40}
                  color="#34495E"
                  style={{
                    backgroundColor: "white",
                    padding: 10,
                    borderRadius: 70,
                    borderColor: "#34495E",
                    borderWidth: 1,
                    marginBottom: 4,
                  }}
                />
                <Text style={{ color: "gray", fontSize: 13 }}>
                  Internet Reachable?
                </Text>
                <Text style={{ fontSize: 17 }}>{inter}</Text>
              </View>
              <View
                style={{
                  width: 150,
                  height: 150,
                  backgroundColor: "#FFF",
                  marginTop: -100,
                  borderRadius: 15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="pulse"
                  size={40}
                  color="#E67E22"
                  style={{
                    backgroundColor: "white",
                    padding: 6,
                    borderRadius: 50,
                    borderColor: "#E67E22",
                    borderWidth: 1,
                    marginBottom: 4,
                  }}
                />
                <Text style={{ color: "gray", fontSize: 13 }}>Frequency</Text>
                <Text style={{ fontSize: 17 }}>{frequency}</Text>
              </View>
            </View>

            <View
              style={{
                display: "flex",
                maxWidth: "75%",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 130,
              }}
            >
              <View
                style={{
                  width: 150,
                  height: 150,
                  backgroundColor: "#fff",
                  marginTop: -100,
                  borderRadius: 15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name="transit-connection-variant"
                  size={40}
                  color="#F1C40F"
                  style={{
                    backgroundColor: "white",
                    padding: 6,
                    borderRadius: 50,
                    borderColor: "#F1C40F",
                    borderWidth: 1,
                    marginBottom: 4,
                  }}
                />
                <Text style={{ color: "gray", fontSize: 13 }}>IP Address</Text>
                <Text style={{ fontSize: 17 }}>{ipaddress}</Text>
              </View>
              <View
                style={{
                  width: 150,
                  height: 150,
                  backgroundColor: "#fff",
                  marginTop: -100,
                  borderRadius: 15,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome5
                  name="network-wired"
                  size={30}
                  color="#27AE60"
                  style={{
                    backgroundColor: "white",
                    padding: 10,
                    borderRadius: 70,
                    borderColor: "#27AE60",
                    borderWidth: 1,
                    marginBottom: 4,
                  }}
                />
                <Text style={{ color: "gray", fontSize: 13 }}>Subnet</Text>
                <Text style={{ fontSize: 17 }}>{subnet}</Text>
              </View>
            </View>
          </Bottomsection>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
    </Container>
  );
};

export default Home;
