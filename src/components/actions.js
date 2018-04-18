'use strict'

import React, { Component } from 'react'

export default class Actions extends Component {
  render () {
    return (
      <div className='actions btn-group col-lg-4'>
        <button onClick={this.props.handleRepo} className='btn btn-primary'>Ver repositórios</button>
        <button onClick={this.props.handleStarred} className='btn btn-primary'>Ver favoritos</button>
      </div>
    )
  }
}
