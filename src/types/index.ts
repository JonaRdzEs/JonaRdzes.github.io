export type Link = {
  text: string,
  url: string
,};

export type Experiences = {
  period: string,
  contributions: Experience[],
};

export type Experience = {
  title: string,
  description: string,
  link?: Link
}

export type Project = {
  slug: string,
  title: string,
  description: string,
  sourceCodeUrl: string,
  url: string, 
}

export type ProjectImage = {
  image: ImageMetadata,
  alt: string,
}