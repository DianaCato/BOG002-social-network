
  export function savePost(title, description){
    const db = firebase.firestore();
    db.collection("post").doc().set({
        title,
        description,
      })
  };
