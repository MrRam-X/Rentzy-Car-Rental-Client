export type ContactForm = {
  fullName: string;
  email: string;
  contactNumber: string;
  subject: string;
  message: string;
};

export type GetInTouchPayload = ContactForm;

export type GetInTouchResponse = {
  statusCode: number;
  message: string;
};
