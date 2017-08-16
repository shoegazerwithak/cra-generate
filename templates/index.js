"use strict"

const flowtype = require("./template.flowtype")
const javascript = require("./template.javascript")
const reactNative = require("./template.react_native")

module.exports = fileType => {
  switch (fileType.toLowerCase()) {
    case "flow":
    case "flowtype":
      return flowtype
    case "native":
    case "react-native":
      return reactNative
    default:
      return javascript
  }
}
