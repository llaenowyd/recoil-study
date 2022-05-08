import { useKeyPressEvent } from 'react-use'

export const useKeypressEvents = (onSave, onCancel) => {
  useKeyPressEvent('Escape', onCancel)
  useKeyPressEvent('Enter', onSave)
}
