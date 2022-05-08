import React from 'react'
import { useSetRecoilState } from 'recoil'

import { itemEntryVisibleState } from '../recoil/view'

import Button from './Button'

const NewItemButton = ({ disabled }) => {
  const setItemEntryVisible = useSetRecoilState(itemEntryVisibleState)

  const onClick = () => setItemEntryVisible(true)

  return <Button label="New Item" onClick={onClick} disabled={disabled} />
}

export default NewItemButton
