export interface CrudOperations<T, ID> {
  save(entity: T): T;
  list(): T[];
  findById(id: ID): T;
  update(entity: T, id: ID): T;
  delete(id: ID): void;
}
