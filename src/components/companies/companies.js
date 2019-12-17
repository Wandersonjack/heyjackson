import React, { Component } from "react"
import  '../companies/style/companies.css'
import "../grid-system/custom-layout.css"
import indt from '../../images/companies/indt.svg'
import logo_trocados from '../../images/companies/trocados.svg'
import onstock from '../../images/companies/onstock.svg'
import bitofproperty from '../../images/companies/bitofproperty.svg'
import { Body1 } from "../typography/typography"

export default class CompaniesCompent extends Component {
  render() {
    return (
      <div className="companies-section">
        <div className="custom-container">
            <Body1 text="Previously" children="subtitle comp"/>
            <div className="c-row even">
                <img src={indt} />
                <img src={logo_trocados} />
                <img src={bitofproperty} />
                <img src={onstock} />
            </div>
        </div>
      </div>
    )
  }
}
