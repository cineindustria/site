import React from 'react';
import LayoutFullScreen from '../../components/LayoutFullScreen';
import Page from '../../components/Page';
import FilmSchoolsMap from '../../components/FilmSchoolsMap';

export default {

  path: '/film-schools',

  async action() {
    const data = await require.ensure([], require => require('./about.md'), 'about');

    return {
      title: 'Film Schools around the world',
      chunk: 'about',
      component: <LayoutFullScreen><FilmSchoolsMap /></LayoutFullScreen>,
    };
  },

};
