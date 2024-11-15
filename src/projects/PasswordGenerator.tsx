import React from 'react'
import { 
  View, 
  Text, 
  StyleSheet,
} from 'react-native'

import * as Yup from "yup"

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .required("Length is required")
    .min(4, "Length should not be lower than 4")
    .max(20, "Length should not be greater than 20")
})

export default function PasswordGenerator() {
  return (
    <View>
      <Text>PasswordGenerator</Text>
    </View>
  )
}

const styles = StyleSheet.create({})