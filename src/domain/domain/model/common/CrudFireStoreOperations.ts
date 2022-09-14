export interface CrudFireStoreOperations<T, ID> {
  save(entity: T, collectionDB: string): Promise<T>;
  list(collectionDB: string): Promise<T[]>;
  findById(id: ID, collectionDB: string): Promise<T>;
  update(entity: T, id: ID, collectionDB: string): Promise<T>;
  delete(id: ID, collectionDB: string): Promise<void>;
}
