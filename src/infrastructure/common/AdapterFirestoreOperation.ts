import { CrudDataFirestoreOperations } from "./CrudDataFirestoreOperations";

export abstract class AdapterFirestoreOperation<
  E,
  D,
  I,
  R
> extends CrudDataFirestoreOperations<D, I> {
  protected repository: R;

  constructor(repository: R) {
    super();
    this.repository = repository;
  }
}
