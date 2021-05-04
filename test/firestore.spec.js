//aquí se hace el test para las funciones con firestore
 const firebase = jest.fn();
 firebase.firestore = jest.fn({
    firestore : () => {
        return {
          collection: collection.mockResolvedValue('Hola mundo')
        }
      }
  }
 )    
import { savePost } from "../src/firebaseController/firestoreFunctions";

global.firebase = firebase();


test('crear un nuevo post', async () => {


    const data = await savePost("nuevo post", "Hola mundo");
    expect(data.title).toBe('nuevo post');
});
test('the data is peanut butter', async () => {

    const firebase = jest.fn();

    await expect(savePost("nuevo post", "Hola mundo")).resolves.toBe('Hola mundo');

    spy.mockRestore();
});
    //await expect(savePost("nuevo post", "Hola mundo")).resolves.toBe('Hola mundo');
