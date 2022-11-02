export interface IJobsData {
    address: string;
    benefits: string[];
    createdAt: string;
    description: string;
    email: string;
    employment_type: string[];
    id: string;
    location: {
        lat: number;
        long: number;
    }
    name: string;
    phone: string;
    pictures: string[];
    salary: string;
    title: string;
    updatedAt: Date;
}

export interface JobsState {
    jobs: IJobsData[],
    isLoading: boolean,
    error: string,
}

export interface JobsCardProps {
    jobsData: IJobsData
}

export interface DetailsDataProps {
    detailsData: IJobsData
}

export interface InfoDetailsProps {
    infoData: IJobsData
}

export interface AdditionalInfoProps {
    info: IJobsData
}

export interface AttachedImagesProps {
    images: string[]
}

export interface JobDescriptionProps {
    description: IJobsData
}