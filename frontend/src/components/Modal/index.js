import React from 'react'
import { connect } from 'react-redux'

import { closeModal } from '../../store/components/modal/actions'

import Modal from './Modal'

const ModalContainer = ({ modal, closeModal }) => {
  return modal ? <Modal modal={modal} closeModal={closeModal} /> : null
}

const putStateToProps = state => ({ modal: state.modal.modal })
const putActionsToProps = { closeModal }

export default connect(putStateToProps, putActionsToProps)(ModalContainer)
