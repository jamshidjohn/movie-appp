import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyA9IU3Iin9yh3fJNYMFLztzVi0uigeJ26I',
	authDomain: 'movie-app-a69cb.firebaseapp.com',
	projectId: 'movie-app-a69cb',
	storageBucket: 'movie-app-a69cb.appspot.com',
	messagingSenderId: '643463553784',
	appId: '1:643463553784:web:45f3db4939e7691252510d',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth();

export default app;
export { db, auth };
