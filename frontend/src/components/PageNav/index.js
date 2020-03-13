import React from 'react'
import { connect } from 'react-redux'

import { setPage } from '../../store/components/pageNav/actions'

import PageNav from './PageNav'

const PageNavContainer = ({ page, settings, amountOfProducts, setPage }) => (
  <PageNav
    page={page}
    setPage={setPage}
    isNextDisabled={page === Math.ceil(amountOfProducts / settings.pageLen)}
  />
)

const putStateToProps = state => ({
  page: state.pageNav.page,
  settings: state.root.settings
})

const putActionsToProps = { setPage }

export default connect(putStateToProps, putActionsToProps)(PageNavContainer)
