import React from 'react'

import PropTypes from 'prop-types'

import './footer4.css'

const Footer4 = (props) => {
  return (
    <footer className="footer4-footer7 thq-section-padding">
      <div className="footer4-max-width thq-section-max-width">
        <div className="footer4-content">
          <div className="footer4-logo">
            <img
              alt={props.logoAlt}
              src={props.logoSrc}
              className="footer4-logo1"
            />
          </div>
          <div className="footer4-links">
            <span className="thq-body-small">{props.link1}</span>
            <span className="thq-body-small">{props.link2}</span>
            <span className="thq-body-small">{props.link3}</span>
            <span className="thq-body-small">{props.link4}</span>
            <span className="thq-body-small">{props.link5}</span>
          </div>
        </div>
        <div className="footer4-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer4-row">
            <div className="footer4-container">
              <span className="thq-body-small">© 2024 TeleportHQ</span>
            </div>
            <div className="footer4-footer-links">
              <span className="footer4-text6 thq-body-small">
                {props.privacyLink}
              </span>
              <span className="thq-body-small">{props.termsLink}</span>
              <span className="thq-body-small">{props.cookiesLink}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer4.defaultProps = {
  logoAlt: 'Website Logo',
  privacyLink: 'Privacy Policy',
  link5: 'Blog',
  termsLink: 'Terms and Conditions',
  link2: 'About Us',
  cookiesLink: 'Cookies Policy',
  link4: 'FAQ',
  link3: 'Contact Us',
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  link1: 'Courses',
}

Footer4.propTypes = {
  logoAlt: PropTypes.string,
  privacyLink: PropTypes.string,
  link5: PropTypes.string,
  termsLink: PropTypes.string,
  link2: PropTypes.string,
  cookiesLink: PropTypes.string,
  link4: PropTypes.string,
  link3: PropTypes.string,
  logoSrc: PropTypes.string,
  link1: PropTypes.string,
}

export default Footer4
