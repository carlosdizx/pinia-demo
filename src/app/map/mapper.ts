export interface Mapper<Domain, Data> {
  toData(domain: Domain): Data;

  toEntity(data: Data): Domain;
}
