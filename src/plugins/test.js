import React, { Component } from "react"

// You are obviously not limited to material-ui, but we really enjoy
// the material-ui svg icons!
import StarIcon from "@material-ui/icons/star"

// This is the ReactJS component which you can find below this snippet
import InputTextField from "../components/input-text-field"

export default {
  Component: InputTextField,
  IconComponent: <StarIcon />,
  name: "example/content/input-text-field",
  version: "0.0.1",
  text: "Input Text Field",
}
