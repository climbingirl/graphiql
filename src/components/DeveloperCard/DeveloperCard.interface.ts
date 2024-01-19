export interface Developer {
  id: number;
  name: string;
  biography: string;
  contribution: string;
  github: string;
  roles: string[];
  image: string;
}

export interface DeveloperCardProps {
  developer: Developer;
}
