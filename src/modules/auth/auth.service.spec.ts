import config from '../../config';
import authService from './auth.service';

describe("auth.service", () => {
  it("getToken", async () => {
    const response = authService.getToken(config.admin_password);
    expect(response).toBeDefined();
  });
});
