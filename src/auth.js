import firebase from '@/firebase/init';
import store from '@/store';
import db from '@/firebase/db';
import router from '@/router';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    if (user.user) {
      user = user.user;
    }
    const setUser = {
      id: user.uid,
      name: user.email,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
    };
    if(db.collection('users').doc(setUser.id)) {
      console.log('existing user')
    } else {
      db.collection('users').doc(setUser.id).set(setUser);
    }
    store.commit('setUser', setUser);
    router.push('/');
  } else {
    store.commit('setUser', null);
  }
});