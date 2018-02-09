import { Container } from 'unstated'
import firebase from 'firebase';

export default class extends Container {
  state = {
    loading: true,
    data: []
  };

  add = (data, callback) => {
    const newKey = firebase.database().ref().child('portfolio').push().key;
    firebase.database().ref(`portfolio/${newKey}`).set(data)
      .then(() => callback())
      .catch((err) => console.log('err on sending data', err))
  }

  remove = (id, callback) => {
    const refKey = `portfolio/${id}`
    firebase.database().ref(refKey).remove()
      .then(() => callback())
      .catch(err => console.log('Error on delete', err))
  }

  load = (id) => {
    let refKey = 'portfolio'
    if (id) {
      refKey = `portfolio/${id}`
    }
    const projects = []
    const ref = firebase.database().ref(refKey)
    ref.once('value', (snapshot) => {
      snapshot.forEach(data => {
        const itemData = data.val()
        itemData.id = data.key
        projects.push(itemData)
      })
      this.setState({
        loading: false,
        data: projects
      })
    })
  }

  
}