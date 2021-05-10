//aquí se hace el test para las funciones con firestore  
import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
    __collection__: {
      post: {
        __doc__: {
          abc123: {
            title: "new post",
            description: 'Hola mundo',
            author: "User",
          }
        }
      }
    }
  };

global.firebase = new MockFirebase(fixtureData, {isNaiveSnapshotListenerEnabled: true});

import { savePost } from "../src/firebaseController/firestoreFunctions";

const db = firebase.firestore()._data.__collection__.post.__doc__;

describe ("savePost", () => {
    test("savePost es una función", () => {  
        expect(typeof savePost).toBe("function")
        })
    test("Se agrega una nuevo post en la colección", () => {
        savePost('mi primer post', 'yeih!', "Lulú")
        expect(Object.keys(db).length).toBe(2)
    })
    test("Guarda los valores enviados", ()=>{
        savePost("mi segundo post", "se guarda", "Pepito")
        expect(Object.values(db)[2].title).toBe("mi segundo post")
    })    
})
