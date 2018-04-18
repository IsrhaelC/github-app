'use strict'

import React, { Component } from 'react'

export default class Actions extends Component {
  render () {
    return (
      <div className='actions btn-group col-lg-4'>
        <button className='btn btn-primary'>Ver repositórios</button>
        <button className='btn btn-primary'>Ver favoritos</button>
      </div>
    )
  }
}
