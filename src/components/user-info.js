'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class UserInfo extends Component {
  render () {
    return (
      <div className='user-info card col-lg-4'>
        <img className='card-img-top' src={this.props.userInfo.photo} />
        <div className='card-body'>
          <h2 className='card-title'><a href={`https://github.com/${this.props.userInfo.login}`}>{this.props.userInfo.userName}</a></h2>
          <ul className='repos-info list-group'>
            <li className='list-group-item'>Repositórios: {this.props.userInfo.repos}</li>
            <li className='list-group-item'>Seguidores: {this.props.userInfo.followers}</li>
            <li className='list-group-item'>Seguindo: {this.props.userInfo.following}</li>
          </ul>
        </div>
      </div>
    )
  }
}

UserInfo.propTypes = {
  userInfo: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.array.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}
