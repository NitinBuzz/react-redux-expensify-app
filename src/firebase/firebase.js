// const firebase = require('firebase');
import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,

  databaseURL: process.env.databaseURL,

  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId
};
// firebase.initializeApp(config);

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };

// // database.ref('expenses').push({
// //   title: 'GF Bill',
// //   amount: 50000,
// //   note: 'very bad',
// //   createdAt: 123456789
// // });
// //
// // database.ref('expenses').push({
// //   title: 'Wifi Bill',
// //   amount: 1200,
// //   note: '30 mbps',
// //   createdAt: 555555555
// // });
// //
// // database.ref('expenses').push({
// //   title: 'Credit card bill',
// //   amount: 2500,
// //   note: 'EMI + Tax',
// //   createdAt: 987654321
// // });
//
// const setExpenseArray = snapshot => {
//   const expensesArray = [];
//   snapshot.forEach(childSnapshot => {
//     expensesArray.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log('from setExpenseArray: ', expensesArray);
// };
//
// // const onExpenseChange =
// database.ref('expenses').on(
//   'value',
//   snapshot => {
//     const data = snapshot.val();
//     console.log('from onExpenseChange: ', data);
//     setExpenseArray(snapshot);
//   },
//   error => {
//     console.log('Error in onExpenseChange: ', error);
//   }
// );
//
// // const onChildExpenseChange
// database.ref('expenses').on(
//   'child_changed',
//   (snapshot, key) => {
//     const data = snapshot.val();
//     console.log('from onChildExpenseChange: ', data, ' and key is ', key);
//   },
//   error => {
//     console.log('Error in onChildExpenseChange: ', error);
//   }
// );
//
// // const onChildExpenseRemove
// database.ref('expenses').on(
//   'child_removed',
//   snapshot => {
//     const data = snapshot.val();
//     console.log('from onChildExpenseRemove: ', data);
//   },
//   error => {
//     console.log('Error in onChildExpenseRemove: ', error);
//   }
// );
//
// // const onChildExpenseAdded
// database.ref('expenses').on(
//   'child_added',
//   snapshot => {
//     const data = snapshot.val();
//     console.log('from onChildExpenseAdded: ', data);
//   },
//   error => {
//     console.log('Error in onChildExpenseAdded: ', error);
//   }
// );
