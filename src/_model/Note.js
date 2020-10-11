export class Note {
  id;
  name;
  createDate;
  description;
  isPriority;
  executionDate;

  constructor(name, description, isPriority = false) {
    this.name = name;
    this.description = description;
    this.isPriority = isPriority;
  }
}
