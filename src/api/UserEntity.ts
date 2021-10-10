import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com/users/';

export interface UserEntityProps {
  name: string,
  email: string,
  phone: string
}

export class UserEntity {
  constructor(protected props: UserEntityProps) {}

  get name() {
    return this.props.name;
  }

  set name(value) {
    this.props.name = value;
  }

  get email() {
    return this.props.email;
  }

  set email(value) {
    this.props.email = value;
  }

  get phone() {
    return this.props.phone;
  }

  set phone(value) {
    this.props.phone = value;
  }

  static async fetchPerson(id: number): Promise<UserEntity> {
    const response = await axios.get(BASE_URL + id);
    return new UserEntity(response.data);
  }
}
