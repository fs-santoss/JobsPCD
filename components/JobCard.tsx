
import React from 'react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

const LocationIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block text-gray-500" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);

const AccessibilityIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 inline-block text-green-600" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const totalAccommodations = job.accommodations.interview.length + job.accommodations.workplace.length + (job.hasFullPhysicalAccess ? 1 : 0);

  return (
    <div className="bg-[#FFFFFF] shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-[#005A9C]">{job.title}</h3>
          <p className="text-md text-[#343A40] font-semibold">{job.company}</p>
        </div>
        <span className="bg-blue-100 text-[#005A9C] text-xs font-semibold px-2.5 py-0.5 rounded-full">{job.modality}</span>
      </div>
      <div className="mt-4 text-gray-600">
        <p><LocationIcon />{job.location}</p>
      </div>
      <div className="mt-4 text-sm text-gray-700">
        <p className="line-clamp-2">{job.description}</p>
      </div>
      {totalAccommodations > 0 && (
         <div className="mt-4 border-t pt-4">
             <p className="text-sm font-semibold text-green-700 flex items-center">
                <AccessibilityIcon />
                {totalAccommodations} adaptaç{totalAccommodations > 1 ? 'ões' : 'ão'} de acessibilidade oferecida{totalAccommodations > 1 ? 's' : ''}.
             </p>
         </div>
      )}
       <div className="mt-6 flex justify-end">
        <button className="bg-[#005A9C] text-[#FFFFFF] px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005A9C]">
          Ver detalhes da vaga
        </button>
      </div>
    </div>
  );
};
