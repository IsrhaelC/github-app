'use strict'

import React, { Component } from 'react'

export default class Search extends Component {
  render () {
    return (
      <div className='search col-lg-4 form-group'>
        <input className='form-control' type='search' placeholder='Digite o nome do usuário' />
      </div>
    )
  }
}
