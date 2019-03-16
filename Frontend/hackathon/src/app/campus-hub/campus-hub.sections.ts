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
      {
        linkName: 'View Internships',
        route: '/internships/view',
        disabled: true
      },
    ]
  },
  {
    sectionName: 'Scholarships',
    links: [{
      linkName: 'View Scholarships',
      route: '/scholarships/view',
      disabled: true
    }]
  },
  {
    sectionName: 'Jobs',
    links: [{linkName: 'View Jobs', route: '/jobs/view', disabled: true}]
  },
  {
    sectionName: 'Clubs and Activities',
    links: [{
      linkName: 'View Clubs and Activities',
      route: '/jobs/view',
      disabled: true
    }]
  }
];
