export default function upDateUser(name) {
  const user = firebase.auth().currentUser;
  user
    .updateProfile({
      displayName: name,
    })
    .then(function () {
      window.location.reload();
    })
    .catch(function (error) {
      console.log(error);
    });
}
