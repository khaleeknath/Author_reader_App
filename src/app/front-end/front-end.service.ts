import axios from "axios";

const ENVConfig = require(`../../config/${process.env.NODE_ENV}.json`);

export class FrontEndService {
  constructor() {}

  public async checkCredentials(username, password): Promise<any> {
    try {
      const obj = await axios.post(`${ENVConfig.FRONT_END.BASE_URL}/login`, {
        mobile: username,
        password: password,
      });

      console.log(obj);
      return obj.data.data;
    } catch (error) {
      throw error;
    }
  }

  
}
