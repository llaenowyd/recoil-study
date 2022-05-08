import React, { forwardRef } from 'react'

import { Input } from './styled'

const Entry = forwardRef(({}, ref) => <Input ref={ref} type="text" />)

export default Entry
