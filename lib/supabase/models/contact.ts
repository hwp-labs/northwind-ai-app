import { BaseModel } from "./base";

export interface ContactModel extends BaseModel {
  name: string;
  email: string;
  telephone: string;
  // 
  businessName: string;
  industryId?: string | null;
  industryOtherValue?: string;
  location: string;
  // 
  subscribed?: boolean;
}
