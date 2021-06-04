import jsonwebtoken from 'jsonwebtoken';

import config from '../config';

const jwtSign = (payload: any) => {
    return jsonwebtoken.sign(payload, config.app_secret);
}

export default jwtSign;