export type AutoRentalPayload = {
  email: string;
  carType: string;
  pickupDate: string;
  dropoffDate: string;
  pickupLocation: string;
};

export type AutoRentalResponse = {
  statusCode: number;
  message: string;
  data: AutoRentalPayload & {
    _id: string;
  };
};
