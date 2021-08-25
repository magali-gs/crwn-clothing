import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShop = await userRef.get();

	if(!snapShop.exists) {
		const { displayName, email } = userAuth;
		const createAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createAt,
				...additionalData
			})
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();
	objectToAdd.forEach((obj) => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map(doc => {
		const { title, items } = doc.data();

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items
		}
	});


	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator
	}, {})
} 

export const getCurrentUser = () => {
	return new Promise((resolver, reject)=> {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			unsubscribe();
			resolver(userAuth);
		}, reject)
	});
}



export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ promt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;