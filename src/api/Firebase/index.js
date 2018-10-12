import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyA2pQuh4UKAWKY-Oz2NH38goYShIhv4d88',
  authDomain: 'shoplemarche-f8f4a.firebaseapp.com',
  databaseURL: 'https://shoplemarche-f8f4a.firebaseio.com',
  projectId: 'shoplemarche-f8f4a',
  storageBucket: '',
  messagingSenderId: '725042631830'
};
firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.firestore();
const settings = { /* your settings... */ timestampsInSnapshots: true };
db.settings(settings);
