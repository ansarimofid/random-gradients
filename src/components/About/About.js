/**
 * Created by ansarimofid on 20/07/17.
 */
import React from 'react'


const About = ()=>(
  <div className="uk-container uk-text-center about">
      <div is uk-grid>
          <div className="uk-width-1-6@s uk-width-1-6@m"></div>
          <div className="uk-width-2-3@s uk-width-2-3@m">
              <h1 className="title-deco gradient-text uk-text-center uk-margin-medium-top uk-margin-medium-bottom">
                  Random Thoughts
              </h1>
              <p className="uk-text-left">It started with an obsession for colours and gradients. There are millions of possible colours and gradient combination but we are hardly able to explore even 10% of it. There was a need for something which can make us explore every possibility of colours and gradients. With this thought, <span className="gradient-text">Random Gradients</span> was born.</p>
              <p className="uk-text-left"> <span className="gradient-text">Random Gradients</span>  gives a designer a freedom to explore an infinite possibility of colours and gradients. It also enables them to save random gradients for further use in their design. </p>
          </div>
          </div>
      </div>
);

export default About
