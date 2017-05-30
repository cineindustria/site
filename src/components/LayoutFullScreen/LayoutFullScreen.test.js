/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-env mocha */
/* eslint-disable padded-blocks, no-unused-expressions */

import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import App from '../App';
import LayoutFullScreen from './LayoutFullScreen';

describe('LayoutFullScreen', () => {

  it('renders children correctly', () => {
    const wrapper = render(
      <App context={{ insertCss: () => {} }}>
        <LayoutFullScreen>
          <div className="child" />
        </LayoutFullScreen>
      </App>,
    );
    expect(wrapper.find('div.child').length).to.eq(1);
  });

});
