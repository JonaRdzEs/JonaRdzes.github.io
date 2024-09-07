export type Experiences = {
  period: string,
  contributions: Experience[],
};

export type Experience = {
  title: string,
  description: string,
}

export type Project = {
  title: string,
  image: string,
  description: string,
  sourceCodeUrl: string,
  url: string, 
}