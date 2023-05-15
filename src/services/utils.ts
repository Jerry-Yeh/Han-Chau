export default class UtilsService {
  static parseJwt = (token: string) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(''),
    );

    return JSON.parse(jsonPayload);
  };

  static capitalize = (text: string): string => {
    return text.replace(/\b(\w)/g, (s) => s.toUpperCase());
  };

  static getTimestamp = () => {
    return Date.now();
  };
}
