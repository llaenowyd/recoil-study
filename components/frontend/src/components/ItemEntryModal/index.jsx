import React, { useCallback } from 'react'
import { useRecoilState } from 'recoil'
import tw from 'twin.macro'

import { itemEntryVisibleState } from '../../recoil/view'
import Modal from '../Modal'

import ItemEntry from './ItemEntry'

const FormBackground = tw.div`
  rounded
  bg-white
  w-4/5
`

const ItemEntryModal = () => {
  const [visible, setVisible] = useRecoilState(itemEntryVisibleState)

  const hide = useCallback(() => setVisible(false), [setVisible])

  return (
    <Modal visible={visible} hide={hide}>
      <FormBackground>
        <ItemEntry hide={hide} />
      </FormBackground>
    </Modal>
  )
}

export default ItemEntryModal
