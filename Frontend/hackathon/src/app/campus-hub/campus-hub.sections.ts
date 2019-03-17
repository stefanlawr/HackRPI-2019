interface Section {
  sectionName: string;
  links: SectionLink[];
}

export interface SectionLink {
  linkName: string;
  route: string;
  params?: any[];
  disabled?: boolean;
}

export const SECTIONS: Section[] = [
  {
    sectionName: 'Internships',
    links: [
      { linkName: 'View Internships', route: '/internships', disabled: false }
    ]
  },
  {
    sectionName: 'Scholarships',
    links: [
      { linkName: 'View Scholarships', route: '/scholarships', disabled: false }
    ]
  },
  {
    sectionName: 'Jobs',
    links: [{ linkName: 'View Jobs', route: '/jobs', disabled: false }]
  },
  {
    sectionName: 'Clubs and Activities',
    links: [
      {
        linkName: 'View Clubs and Activities',
        route: '/clubs',
        disabled: false
      }
    ]
  },
  {
    sectionName: 'Student Services',
    links: [
      { linkName: 'View Student Services', route: '/students', disabled: false }
    ]
  }
];
