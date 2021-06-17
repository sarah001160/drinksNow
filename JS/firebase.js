  firebase.initializeApp({
      databaseURL:"https://testing20210530-31aa4-default-rtdb.asia-southeast1.firebasedatabase.app/"
  });
  const database = firebase.database();
  database.ref('/').set({a:123});
  database.ref('/a').set({r1:456});