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

const toObjectFirebase = (entity: any) => JSON.parse(JSON.stringify(entity));

export class CrudDataFirestoreOperations<T>
  implements CrudFirestoreOperations<T, string>
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

  async findById(id: string, collectionDB: string): Promise<T> {
    const obj: any = (await getDoc(doc(FIRESTORE, collectionDB, id))).data();
    return Promise.resolve(obj);
  }

  async update(
    entity: T | any,
    id: string,
    collectionDB: string
  ): Promise<any> {
    const entityFind: any | T = await this.findById(id, collectionDB);

    entity["created_at"] = entityFind["created_at"];
    entity["update_at"] = new Date();
    await setDoc(doc(FIRESTORE, collectionDB, id), toObjectFirebase(entity));
    return Promise.resolve(entity);
  }

  async delete(id: string, collectionDB: string): Promise<void> {
    await deleteDoc(doc(FIRESTORE, collectionDB, id));
    return Promise.resolve();
  }
}
