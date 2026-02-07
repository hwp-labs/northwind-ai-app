export type PrimaryKeyType = number;

export interface BaseEntity {
  id: PrimaryKeyType;
  createdAt?: string;
  updatedAt?: string | null;
  deletedAt?: string | null;
}

export interface LookupEntity {
  id: PrimaryKeyType;
  name: string;
}

export interface ApiResponse<T> {
  data: T | null;
  error: string | undefined;
}
