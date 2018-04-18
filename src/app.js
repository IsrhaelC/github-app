'use strict'

import React from 'react'
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'

export default class App extends React.Component {
  render () {
    return (
      <div className='app container'>
        <Search />
        <UserInfo />
        <Actions />

        <Repos
          className='repos list-group'
          title='Repositório'
          repos={[{
            name: 'Nome do Repositório',
            link: '#'
          }]} />

        <Repos
          className='starred list-group'
          title='Favoritos'
          repos={[{
            name: 'Nome do Repositório',
            link: '#'
          }]} />

      </div>
    )
  }
}
