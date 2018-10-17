import React, {Component} from 'react'

import {OurProgram} from './OurProgram'
import {NewResident} from './NewResident'
import {ResidentLife} from './ResidentLife'
import {CurrentResident} from './CurrentResident'
import Logo from '../../assets/logo.svg'
import './nav.scss'

export class Nav extends Component { 
  render() {
    return (
      <div className="nav">
          <img className="nav__logo" src={Logo}/>
          <p className="nav__title">Crossroads</p>
          <div className="nav__menu">
            <OurProgram/>
            <NewResident/>
            <ResidentLife/>
            <CurrentResident/>
          </div>
      </div>
    )
  }
}