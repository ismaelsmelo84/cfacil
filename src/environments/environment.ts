// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  api: 'http://localhost:8080',
  firebase: {
    apiKey: 'AIzaSyD5BiO3XOszG2TeKWE-0YXCS_-z0WnjpEQ',
    authDomain: 'cortinafacil-ba0d7.firebaseapp.com',
    databaseURL: 'https://cortinafacil-ba0d7.firebaseio.com',
    projectId: 'cortinafacil-ba0d7',
    storageBucket: '',
    messagingSenderId: '49768899612'
  }
};
