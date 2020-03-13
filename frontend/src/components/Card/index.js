import React from 'react'

const Card = ({ image, title, body, width = '500px' }) => {
  return (
    <div className="card mb-3 my-card" style={{ margin: '0 auto', width }}>
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
  )
}

export default Card
