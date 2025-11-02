
export enum UserType {
  CANDIDATE = 'CANDIDATE',
  RECRUITER = 'RECRUITER',
}

export interface User {
  id: string;
  name: string;
  email: string;
  type: UserType;
}

export interface AccessibilityProfile {
  disabilityType?: string;
  assistiveTech?: string[];
  interviewNeeds?: string[];
  workplaceNeeds?: string[];
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  modality: 'Home Office' | 'Híbrido' | 'Presencial';
  description: string;
  salary?: string;
  accommodations: {
    interview: string[];
    workplace: string[];
  };
  hasFullPhysicalAccess: boolean;
}

export interface LinterResult {
  phrase: string;
  reason: string;
  suggestion: string;
}
