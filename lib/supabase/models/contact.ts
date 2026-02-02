import { BaseModel } from "./base";

export interface ContactModel extends BaseModel {
  name: string;
  email: string;
  telephone: string;
  // 
  businessName: string;
  industryId?: string;
  industryOtherText?: string;
  location: string; // Ex. Sapele Road, Benin
}
