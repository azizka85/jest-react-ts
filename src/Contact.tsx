import React from 'react';
import { Map, MapProps } from "./Map";

interface ContactProps {
  name: string,
  email: string,
  site: string,
  location: MapProps
};

export function Contact({ name, email, site, location }: ContactProps) {
  return (
    <address>
      Contact {name} via email
      <a data-testid="email" href={"mailto:" + email}>
        {email}
      </a>
      or on their website
      <a data-testid="site" href={site}>
        {site}
      </a>
      <Map {...location} />
    </address>
  );
}
