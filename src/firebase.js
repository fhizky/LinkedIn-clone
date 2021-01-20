import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDidEjxIgjx4G7PglDjGdpBKUuFDz60V3o",
	authDomain: "linkedin-clone-b4a30.firebaseapp.com",
	projectId: "linkedin-clone-b4a30",
	storageBucket: "linkedin-clone-b4a30.appspot.com",
	messagingSenderId: "960072677427",
	appId: "1:960072677427:web:19caa78fc062c4b93b4b46",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export { db, auth };
