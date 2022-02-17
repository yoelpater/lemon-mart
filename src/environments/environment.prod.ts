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
  production: true,
  authMode: AuthMode.Firebase,
}
