import koaJwt from 'koa-jwt';
import config from '../config';

const jwtCheck = koaJwt({
  secret: config.app_secret
});

export default jwtCheck;