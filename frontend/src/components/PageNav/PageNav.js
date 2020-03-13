import React from 'react'

import './PageNav.css'
import Button from '../Button'

const PageNav = ({ page, setPage, isNextDisabled }) => {
  return (
    <div className="my-page-nav">
      <Button disabled={page === 1} action={() => setPage(page - 1)}>
        &lt;
      </Button>
      <Button disabled>{page}</Button>
      <Button disabled={isNextDisabled} action={() => setPage(page + 1)}>
        &gt;
      </Button>
    </div>
  )
}

export default PageNav
