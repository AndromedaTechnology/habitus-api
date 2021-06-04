import config from '../../config/index';
import jwtSign from '../../helpers/jwtSign';

export const ROLE_ADMIN = "admin";

class AuthService {
    /**
     * Get Token
     *
     * @param {string} password
     * @returns {string}
     */
    getToken(password: string): string {
        if (password === config.admin_password) {
            const token = jwtSign({
                role: ROLE_ADMIN
            });
            return token;
        }
        throw "Incorrect password."
    }

}

export default new AuthService();