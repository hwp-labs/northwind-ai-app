export interface BaseModel {
  id: string;
  createdAt: string;
  updatedAt?: string | null;
  deletedAt?: string | null;
}

export interface LookupModel {
  id: string;
  name: string;
}
