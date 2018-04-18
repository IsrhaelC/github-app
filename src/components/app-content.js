'use strict'

import React, { Component } from 'react'

import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'
import PropTypes from 'prop-types'

export default class AppContent extends Component {
  render () {
    return (
      <div className='app container'>
        <Search handleSearch={this.props.handleSearch} />
        {!!this.props.userInfo && <UserInfo userInfo={this.props.userInfo} />}
        {!!this.props.userInfo && <Actions handleRepo={this.props.handleRepo} handleStarred={this.props.handleStarred} />}

        {!!this.props.repos.length &&
          <Repos
            className='repos list-group'
            title='Repositório'
            repos={this.props.repos}
          />
        }

        {!!this.props.starred.length &&
          <Repos
            className='starred list-group'
            title='Favoritos'
            repos={this.props.starred}
          />
        }

      </div>
    )
  }
}

AppContent.propTypes = {
  userInfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
}
