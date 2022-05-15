import React from 'react'
import { useSetRecoilState } from 'recoil'
import { Button } from '@a110/rito'

import { itemEntryVisibleState } from '../recoil/view'

const NewItemButton = ({ disabled }) => {
  const setItemEntryVisible = useSetRecoilState(itemEntryVisibleState)

  const onClick = () => setItemEntryVisible(true)

  return <Button label="New Item" onClick={onClick} disabled={disabled} />
}

export default NewItemButton
