export interface CarService {
  _id: string;
  serviceTitle: string;
  serviceDescription: string;
  serviceDetails: {
    title: string;
    description: string;
  }[];
  benefitPoints: string[];
  serviceConditions: {
    title: string;
    description: string;
  }[];
}
