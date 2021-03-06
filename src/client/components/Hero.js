import React from 'react';
import { FormattedMessage } from 'react-intl';
import './Hero.less';

const Hero = () => (
  <div className="Hero">
    <div className="container container-small">
      <h1 className="hero-message">
        <FormattedMessage
          id="hero"
          defaultMessage="DLearn | Learning Decentralized and Incentivized"
        />
      </h1>
      <a target="_blank" rel="noopener noreferrer" href="https://steemit.com/pick_account">
        <button className="ant-btn-lg hero-signup">
          <FormattedMessage id="signup" defaultMessage="Sign up" />
        </button>
      </a>
    </div>
  </div>
);

export default Hero;
