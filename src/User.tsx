import React from 'react';
import { UserEntity } from "./api/UserEntity";

export interface UserProps {
  user: UserEntity
}

export function User({ user }: UserProps) {
  return (
    <details>
      <p>
        Name: <summary>{user.name}</summary>
      </p>
      <p>
        Email: <strong>{user.email}</strong>
      </p>
      <p>
        Phone: <strong>{user.phone}</strong>
      </p>
    </details>
  );
}
