
export function savePost(title, description) {
  const db = firebase.firestore();
  db.collection("post").doc().set({
    title,
    description,
  })
  db.collection("post")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    });
};
