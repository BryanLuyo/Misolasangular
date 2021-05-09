export interface JwtResponse {
  dataUser: {
    id: number,
    name: string,
    accessToken: string,
    expiresIn: string
  };
}
