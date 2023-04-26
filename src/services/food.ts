import Api from './api';

export interface Parameters {
  skip: number;
  limit: number;
}

export default class Food {
  static async queryFood(skip = 0, limit = 100) {
    const clientId = '94e2aa90-46ae-11ed-aa50-af081e9af6d6';
    const clientSecret = 'ncND3NPIqGYbQrDTdTSrdCdYJJUicRYEMMvWfjmH2B4%3D';

    return Api.idbReq(
      'get',
      `18463fd0-8aa7-11ea-8b2f-dfcba39a3448/6ace07502582?client_id=${clientId}&client_secret=${clientSecret}&skip=${skip}&limit=${limit}`,
    ).then((response) => response.data.data);
  }
}
