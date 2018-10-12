import * as firebase from 'firebase';
// Initialize Firebase

import { FirebaseConfig } from '../../../config/keys';
firebase.initializeApp(FirebaseConfig);

export const auth = firebase.auth;
export const db = firebase.firestore();
const settings = { /* your settings... */ timestampsInSnapshots: true };
db.settings(settings);
