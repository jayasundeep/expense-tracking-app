import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database

// Add the Firebase services that you want to use
// import "firebase/auth";
// import "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



const database = firebase.database();

export { database as default, firebase };


/* database.ref().set({
    name : 'Jaya Sundeep K',
    age : 26,
    isSingle : true,
    location : {
        state : 'Andhra Pradesh',
        country : 'India'
    }
}); */

/* const promise = new Promise((reject, resolve) => 
    setTimeout(() => {
        reject('sd');
    }, 3000)
);

promise.then((data) => {
    console.log('1', data);
}).catch((e) => {
    console.log('This is the error', e);
});

new Promise((resolve, reject) => {
    console.log('Initial');

    throw new Error('Something failed');
})
.then(() => {
    // throw new Error('Something failed');
        
    console.log('Do this');
})
.catch((e) => {
    console.error('Do that : ', e);
})
.then(() => {
    console.log('Do this, no matter what happened before');
}); */



