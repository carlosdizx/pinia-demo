export interface CrudOperations<T, ID> {
  findAll(): T[];
  findById(): T;
  save(): T;
  updateById(): T;
  updateById(): void;
}
