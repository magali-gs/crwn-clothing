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

firebase.initializeApp(config);

export const addCollectionAndDocuments =  async(collectionKey, objectToAdd) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();
	objectToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	return await batch.commit();
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;