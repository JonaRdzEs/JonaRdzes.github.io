export type Experiences = {
  period: string,
  experiences: Experience[],
};

export type Experience = {
  title: string,
  description: string,
  icon: string,
}

export type Project = {
  title: string,
  image: string,
  description: string,
  sourceCodeUrl: string,
  url: string, 
}