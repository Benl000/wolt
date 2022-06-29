import React from 'react'
import { ReactComponent as LocationLogo } from '../assets/svgs/footer/location.svg';
import { ReactComponent as LangLogo } from '../assets/svgs/footer/lang.svg';
import { ReactComponent as AccssibilityLogo } from '../assets/svgs/footer/accssibility.svg';
import { ReactComponent as WoltLogo } from '../assets/svgs/footer/logo.svg';

export const Footer=()=> {
  return (
    <section className="main-footer">
      <div className="main-footer_header">
      <WoltLogo  className="main-footer_header-logo"/>
      </div>
      <div className="main-footer_footer">
        <ul className="main-footer_footer-left">
          <div className="subFooterBtn">
            <LocationLogo/>
            <span>
            Israel
            </span>
          </div>
          <div className="subFooterBtn">
            <LangLogo/>
            <span>
            English
            </span>
          </div>
          <div className="subFooterBtn">
          <AccssibilityLogo/>
            <span>
            Accessibility
            </span>
          </div>
        </ul>
        <div className="main-footer_footer-right">         
          ©️ Ben's Wolt 2022
        </div>
      </div>
    </section>
  )
}
