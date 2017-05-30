/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HeaderFullScreen.css';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './cinelogo.svg';

class HeaderFullScreen extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation />
          <Link className={s.brand} to="/">
            <img src={logoUrl} width="38" height="38" alt="cineindustria.com" />
            <span className={s.brandTxt}>cineindustria.com</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(HeaderFullScreen);
