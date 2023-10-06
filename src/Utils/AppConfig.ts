class AppConfig {
  private instagramAppId: string = "1893697231015252";
  private instagramAppSecret: string = "6f2eefe418fad6f7192c1183f5c1995c";
  private instagramRedirectUri: string = "https://localhost:3000/auth/instagramUser";
  public instagramAuthorizationUrl: string = `https://api.instagram.com/oauth/authorize?client_id=${this.instagramAppId}&redirect_uri=${this.instagramRedirectUri}&scope=user_profile,user_media&response_type=code`;
  public instagramAccessTokenUrl: string = `https://api.instagram.com/oauth/access_token`;

  public getBody(userCode: string) {
    return {
        client_id: this.instagramAppId,
        client_secret: this.instagramAppSecret,
        code: userCode,
        grant_type: 'authorization_code',
        redirect_uri: this.instagramRedirectUri
    }
  }
}

const appConfig = new AppConfig();

export default appConfig;
