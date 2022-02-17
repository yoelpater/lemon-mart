// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { AuthMode } from 'src/app/auth/auth.enum'

export const environment = {
  firebase: {
    projectId: 'yoel-playground',
    appId: '1:407807258651:web:235fd585bf1261ce8e48be',
    storageBucket: 'yoel-playground.appspot.com',
    apiKey: 'AIzaSyCMggtgJwnDBTDfWb52VoxaOxob38cBySA',
    authDomain: 'yoel-playground.firebaseapp.com',
    messagingSenderId: '407807258651',
  },
  production: false,
  authMode: AuthMode.InMemory,
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
