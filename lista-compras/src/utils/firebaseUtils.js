import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCkzJHtX3i4eW6aJtD-NIvT7JvSrNZ9Fr4",
    authDomain: "lista-compras-srs-api.firebaseapp.com",
    databaseURL: "https://lista-compras-srs-api.firebaseio.com",
    projectId: "lista-compras-srs-api",
    storageBucket: "lista-compras-srs-api.appspot.com",
    messagingSenderId: "725425571666"
};

firebase.initializeApp(config);
export const db = firebase.database();