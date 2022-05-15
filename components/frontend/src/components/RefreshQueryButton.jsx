import React from 'react'
import { useRecoilRefresher_UNSTABLE } from 'recoil'
import { Button } from '@a110/rito'

import { todoListQuery } from '../recoil/todos'

// This shows how to refresh a selector which causes its getter
// to be invoked.

const RefreshQueryButton = ({ disabled }) => {
  const onClick = useRecoilRefresher_UNSTABLE(todoListQuery)

  return <Button label="Refresh" onClick={onClick} disabled={disabled} />
}

export default RefreshQueryButton
