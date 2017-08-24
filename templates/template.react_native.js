
"use strict"
const utils = require("./utils")

module.exports = ({
  componentPath,
  componentName,
  fileName,
  semiColon,
  cssExtension,
  noTest,
  isFunctional,
}) =>
  utils.createTemplate(componentPath, {
//     [`${fileName}.${cssExtension}`]: `
// .${componentName} {}
//   `,

    "index.js": `
export { default } from './${fileName}'${semiColon}
  `,

    [`${fileName}.test.js`]: noTest
      ? ""
      : `
import 'react-native'${semiColon}
import React from 'react'${semiColon}
// import Index from '../index.android.js'${semiColon}
import ${componentName} from './${componentName}'${semiColon}

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'${semiColon}

it('renders correctly', () => {
  const tree = renderer.create(
    <${componentName} />
  )${semiColon}
})${semiColon}
  `,

    [`${fileName}.js`]: isFunctional
      ? `
import React from 'react'${semiColon}

import {
  StyleSheet,
  Text,
  View
} from 'react-native'${semiColon}
const ${componentName} = ({}) => (
  <View style={styles.container}></div>
)${semiColon}

 ${componentName}.propTypes = {
}${semiColon}
 ${componentName}.defaultProps = {
}${semiColon}
const styles = StyleSheet.create({
  container: {
  },
})${semiColon}

export default ${componentName}${semiColon}

  `
      : `
import React, { Component } from 'react'${semiColon}
import {
  StyleSheet,
  Text,
  View
} from 'react-native'${semiColon}
import PropTypes from "prop-types"${semiColon}
class ${componentName}  extends Component {
  state = {}${semiColon}
  render() {
    return (
      <View style={styles.container}>
      Hello
      </View>
    )${semiColon}  }

}

 ${componentName}.propTypes = {
}${semiColon}
 ${componentName}.defaultProps = {
}${semiColon}
const styles = StyleSheet.create({
  container: {
  },
})${semiColon}
export default ${componentName}${semiColon}
  `,
  })
