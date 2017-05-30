/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './LayoutFullScreen.css';
import HeaderFullScreen from '../HeaderFullScreen';
import Footer from '../Footer';

class LayoutFullScreen extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <HeaderFullScreen />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default withStyles(s)(LayoutFullScreen);
