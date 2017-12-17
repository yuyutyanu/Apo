import firebase from 'firebase'

export default function ({redirect, isClient}) {
  if (isClient) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user === null) {
        return redirect('/Login')
      }
    })
  }
}
