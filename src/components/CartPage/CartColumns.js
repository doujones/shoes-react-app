import React from 'react'

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block my-5">
      <div className="row">
      <div className="col-lg-2">
      <p className="text-uppercase">Merchandise</p>
      </div>
      <div className="col-lg-2">
      <p className="text-uppercase">name</p>
      </div>
      <div className="col-lg-2">
      <p className="text-uppercase">price</p>
      </div>
      <div className="col-lg-2">
      <p className="text-uppercase">quantity</p>
      </div>
      <div className="col-lg-2">
      <p className="text-uppercase">remove</p>
      </div>
      <div className="col-lg-2">
      <p className="text-uppercase">total sum</p>
      </div>
      </div>
    </div>
  )
}
