interface JobApplication {
  firstName: string;
  surname: string;

  address?: Address;
  emailAddress: string;
  contactNumber: string;
  salaryExpectation?: number;
  authorisedInUK: boolean;
  reference: string;
  adjustments?: string;
  workHistory: WorkHistoryItem[];
  educationHistory: EducationHistoryItem[];

  background: string;
  availability: string;

  cv: File;
  documents: File[];
  jobTitle: string;
}

type Address = {
  lineOne: string;
  lineTwo?: string;
  city: string;
  postcode: string;
};

type WorkHistoryItem = {
  title: string;
  company: string;
  description: string;
  from: Date;
  to: Date;
};

type EducationHistoryItem = {
  qualification: string;
  grade: string;
  institution: string;
  from: Date;
  to: Date;
};

export default JobApplication;