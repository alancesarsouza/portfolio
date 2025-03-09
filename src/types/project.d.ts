type ProjectType = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
  challenges: string[];
  description: string[];
  image: string;
  integration: string[];
  libraries: string[];
  technologies: string[];
  title: string;
  skills: SkillType[];
};
