// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import * as firebase from 'firebase';

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyD-sX9gbVyQ80D3jchR-eTK2FajrCLpCqs',
    authDomain: 'buy-and-sell-89d82.firebaseapp.com',
    projectId: 'buy-and-sell-89d82',
    storageBucket: 'buy-and-sell-89d82.firebasestorage.app',
    messagingSenderId: '752475910451',
    appId: '1:752475910451:web:d3c8aaa339a1ade2a9ce46',
    measurementId: 'G-V2YDYPR29X',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
