import axios from "axios";
import appConfig from "../Utils/AppConfig";
import UserAuthenticationModel from "../Models/UserAuthenticationModel";

class InstagramService {
  public async getUserData(userCode: string | null): Promise<UserAuthenticationModel | {}> {
    try {
      if (userCode) {
        const response = await axios.post<UserAuthenticationModel>(
          appConfig.instagramAccessTokenUrl,
          { data: appConfig.getBody(userCode) },
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        const userData = response.data;
        return userData;
      } else {
        throw Error("There wasnt user code");
      }
    } catch (error: any) {
      console.error(error.message);
      return {};
    }
  }
}

const instagramService = new InstagramService();

export default instagramService;
