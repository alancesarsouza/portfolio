type SkillType = {
  id?: number;
  projectId?: ProjectType['id'];
  project?: ProjectType;

  importance: number;

  label: string[];
  description: string[];
};
