import * as firebase from 'firebase'

export default ({env}) => {
  if (!firebase.apps.length) {
    const config = {
      apiKey: env.apiKey,
      authDomain: env.authDomain,
      databaseURL: env.databaseURL,
      projectId: env.projectId,
      storageBucket: env.storageBucket,
      messagingSenderId: env.messagingSenderId
    }
    firebase.initializeApp(config)
  }
}
