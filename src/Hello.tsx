import React from 'react';

interface HelloProps {
  name?: string
}

export default function Hello({ name }: HelloProps) {
  if(name) {
    return <h1>Hello, {name}!</h1>
  } else {
    return <span>Hey, stranger</span>
  }
}
