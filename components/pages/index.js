// import Vue from 'vue';
import moment from 'moment';

export default {
  data() {
    return {
      msg: 'Hello MyApp!',
      apiHost: process.env.API_HOST
    };
  },
  methods: {
    now() {
      return moment().format('YYYY-MM-DD HH:mm:ss');
    }
  }
};
