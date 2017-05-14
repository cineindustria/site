import React from 'react';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
import FilmSchoolsMap from '../../components/FilmSchoolsMap';

export default {

  path: '/film-schools',

  async action() {
    const data = await require.ensure([], require => require('./about.md'), 'about');

    return {
      title: 'Film Schools around the world',
      chunk: 'about',
      //component: <Layout><Page {...data} /></Layout>,
      component: <Layout><FilmSchoolsMap /></Layout>,
    };
  },

};
