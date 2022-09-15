import { CrudFirestoreOperations } from "../../domain/model/common/CrudFirestoreOperations";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { FIRESTORE } from "../../app/firebaseConfig";
import firebase from "firebase/compat";
import DocumentData = firebase.firestore.DocumentData;

const toObjectFirebase = (entity: any) => JSON.parse(JSON.stringify(entity));

export class CrudDataFirestoreOperations<T, ID>
  implements CrudFirestoreOperations<T, ID>
{
  async save(entity: T | any, collectionDB: string): Promise<T> {
    entity["created_at"] = new Date();
    entity["update_at"] = new Date();
    await addDoc(collection(FIRESTORE, collectionDB), toObjectFirebase(entity));
    return Promise.resolve(entity);
  }

  async list(collectionDB: string): Promise<T[]> {
    const collectionData = collection(FIRESTORE, collectionDB);
    const queryData = query(collectionData, orderBy("created_at", "desc"));
    const result = await getDocs(queryData);
    const list: T[] = [];
    result.forEach((item) => list.push(item.data() as T));
    return Promise.resolve(list);
  }

  async findById(id: ID, collectionDB: string): Promise<T> {
    // @ts-ignore
    const obj: any = (await getDoc(doc(FIRESTORE, collectionDB, id))).data();
    return Promise.resolve(obj);
  }

  async update(entity: T | any, id: ID, collectionDB: string): Promise<T> {
    entity["update_at"] = new Date();
    // @ts-ignore
    await setDoc(doc(FIRESTORE, collectionDB, id), entity);
    return Promise.resolve(entity);
  }

  delete = async (id: ID, collectionDB: string): Promise<void> => {
    // @ts-ignore
    await deleteDoc(doc(FIRESTORE, collectionDB, id));
    return Promise.resolve();
  };
}
