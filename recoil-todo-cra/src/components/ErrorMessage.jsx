import React from 'react'
import tw from 'twin.macro'

// tbd improve

const RedText = tw.div`text-red-600 font-semibold text-lg`

const ErrorMessage = ({ message }) => <RedText>{message}</RedText>

export default ErrorMessage
