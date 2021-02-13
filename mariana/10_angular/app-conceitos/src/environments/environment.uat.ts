export const environment = {
  production: false,
  api: {
    urlEventos: "http://eventos.uat",
    urlLogin: "http://login.uat"
  },
  featureFlag: {
    showLog: true,
    toolbar: {
      filterComplete: true
    },
    login: {
      forgotPassword: true,
      notifications: true
    }
  }
};
