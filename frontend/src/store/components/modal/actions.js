export const Action = {
  SET_MODAL: 'SET_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL'
}

export const setModal = payload => ({
  type: 'SET_MODAL',
  payload
})

export const closeModal = () => ({ type: 'CLOSE_MODAL' })
