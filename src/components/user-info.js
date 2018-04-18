'use strict'

import React, { Component } from 'react'

export default class UserInfo extends Component {
  render () {
    return (
      <div className='user-info card col-lg-4'>
        <img className='card-img-top' src='https://avatars3.githubusercontent.com/u/15205714?v=4' />
        <div className='card-body'>
          <h2 className='card-title'><a href='https://github.com/isrhaelc'>Isrhael Christian</a></h2>
          <ul className='repos-info list-group'>
            <li className='list-group-item'>Repositórios: 112</li>
            <li className='list-group-item'>Seguidores: 12</li>
            <li className='list-group-item'>Seguindo: 212</li>
          </ul>
        </div>
      </div>
    )
  }
}
