import { useMemo } from 'react'
import { useSetRecoilState } from 'recoil'

import { useAddTodoState } from '../../hooks/useAddTodoState'
import { useKeypressEvents } from '../../hooks/useKeypressEvents'
import { itemEntryVisibleState } from '../../recoil/view'

export const useController = (entryRef, hideEntryModal) => {
  const setItemEntryVisible = useSetRecoilState(itemEntryVisibleState)
  const addTodoState = useAddTodoState()

  const [onCancel, onSave] = useMemo(
    () => [
      () => {
        setItemEntryVisible(false)
      },
      () => {
        addTodoState({ description: entryRef.current.value }).then(
          hideEntryModal
        )
      },
    ],
    []
  )

  useKeypressEvents(onSave, onCancel)
}
