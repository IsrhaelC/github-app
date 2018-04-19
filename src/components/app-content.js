'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

export default class AppContent extends Component {
  render () {
    return (
      <div className='app container'>
        <Search handleSearch={this.props.handleSearch} isDisabled={this.props.isFetching} />
        {this.props.isFetching && <div>Carregando...</div>}
        {!!this.props.userInfo && <UserInfo userInfo={this.props.userInfo} />}
        {!!this.props.userInfo && <Actions getRepos={this.props.getRepos} getStarred={this.props.getStarred} />}

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
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired,
  starred: PropTypes.array.isRequired
}
