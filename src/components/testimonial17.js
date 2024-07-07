import React from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial17-text01 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial17-card">
                <div className="testimonial17-container02">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image"
                  />
                  <div className="testimonial17-container03">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text04 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container04">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container05">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text07 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container06">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container07">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text10 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container08">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container09">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text13 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  review2:
    'The JavaScript course exceeded my expectations. I learned so much in a short amount of time. Thank you!',
  review1: '5 stars - Highly recommend!',
  review4:
    'The web development courses offered here are top-notch. I now feel confident in creating websites from scratch.',
  author4Alt: 'Image of Emily Brown',
  review3:
    'Python course was well-structured and the hands-on projects really helped solidify my understanding of the language.',
  author3Alt: 'Image of Alex Johnson',
  author2Position: 'Digital Marketer',
  author1Alt: 'Image of John Doe',
  author2Src:
    'https://images.unsplash.com/photo-1632377082447-899edf0d0124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDM1ODM1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Name: 'Jane Smith',
  author1Src:
    'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDM1ODM1NXw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Position: 'Software Engineer',
  author4Name: 'Emily Brown',
  author2Alt: 'Image of Jane Smith',
  content1:
    'I took the HTML and CSS course and it was fantastic! The instructor explained everything clearly and I was able to apply my learning immediately.',
  author1Position: 'Web Developer',
  author3Src:
    'https://images.unsplash.com/photo-1566574347516-47cf9fb86734?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDM1ODM1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: 'Testimonials',
  author1Name: 'John Doe',
  author4Src:
    'https://images.unsplash.com/photo-1587677171791-8b93c752999b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDM1ODM1NXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Position: 'Graphic Designer',
  author3Name: 'Alex Johnson',
}

Testimonial17.propTypes = {
  review2: PropTypes.string,
  review1: PropTypes.string,
  review4: PropTypes.string,
  author4Alt: PropTypes.string,
  review3: PropTypes.string,
  author3Alt: PropTypes.string,
  author2Position: PropTypes.string,
  author1Alt: PropTypes.string,
  author2Src: PropTypes.string,
  author2Name: PropTypes.string,
  author1Src: PropTypes.string,
  author3Position: PropTypes.string,
  author4Name: PropTypes.string,
  author2Alt: PropTypes.string,
  content1: PropTypes.string,
  author1Position: PropTypes.string,
  author3Src: PropTypes.string,
  heading1: PropTypes.string,
  author1Name: PropTypes.string,
  author4Src: PropTypes.string,
  author4Position: PropTypes.string,
  author3Name: PropTypes.string,
}

export default Testimonial17
