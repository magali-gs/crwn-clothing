import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
// import { apiKey } from '../../secrets.json'

const config = {
	apiKey: "AIzaSyC3z8rPr6iJ0cuxPAAS0MhZRDDF3lv78WM",
	authDomain: "crwn-db-e8d69.firebaseapp.com",
	projectId: "crwn-db-e8d69",
	storageBucket: "crwn-db-e8d69.appspot.com",
	messagingSenderId: "365065239410",
	appId: "1:365065239410:web:c20fea7db0a2abd966bbeb",
	measurementId: "G-JDJ8FE5L35",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;