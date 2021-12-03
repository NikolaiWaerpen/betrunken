import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Container from "../components/Container";
import { NavigationProps } from "../RouteParamList";
import { randomizeArray } from "../utils/randomizeArray";
import Deck from "../components/Deck";

const departments = [
  "Logistics",
  "Setup",
  "Device Management",
  "Developer Services",
  "Finance",
  "Onsite",
  "Print Management",
  "Repair",
  "Sales Advisory",
  "Security Management",
  "Identity & Access Mgmt",
  "Data Science",
  "License Management",
  "Mac Management",
  "Application Packaging",
  "Network Services",
  "Project Management",
  "Technical Services",
  "IOC",
  "Cloud Infrastructure",
];

const randomizedDepartments = randomizeArray(departments);

export default function Mime({ navigation, route }: NavigationProps<"Mime">) {
  return (
    <Container>
      <Deck cards={randomizedDepartments} textSize="text-3xl" />
    </Container>
  );
}
