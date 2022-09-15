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

export class CrudDataFirestoreOperations<T, ID>
  implements CrudFirestoreOperations<T, ID>
{
  async save(entity: T, collectionDB: string): Promise<T> {
    // @ts-ignore
    await addDoc(collection(FIRESTORE, collectionDB), T);
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
    const obj: T = (await getDoc(doc(FIRESTORE, collectionDB, id))).data();
    return Promise.resolve(obj);
  }

  async update(entity: T, id: ID, collectionDB: string): Promise<T> {
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
