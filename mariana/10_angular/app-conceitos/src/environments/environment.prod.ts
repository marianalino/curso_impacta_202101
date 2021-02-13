export const environment = {
  production: true,
  api: {
    urlEventos: "http://eventos",
    urlLogin: "http://login"
  },
  featureFlag: {
    showLog: false,
    toolbar: {
      filterComplete: true
    },
    login: {
      forgotPassword: false,
      notifications: false
    }
  }
};
