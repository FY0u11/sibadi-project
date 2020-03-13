import React from 'react'

import './styles.css'

const ExpandingCard = ({ image, title, body, exBody, isExpanded, width = '500px' }) => {
  return (
    <div className="my-expanding-card" style={{ width }}>
      <div className={`card ${isExpanded && 'my-expanded'}`}>
        <div className="row no-gutters">
          <div className="col-md-4">{image}</div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              {body}
            </div>
          </div>
        </div>
      </div>
      {isExpanded && <div className="my-expanded-body">{exBody}</div>}
    </div>
  )
}

export default ExpandingCard
