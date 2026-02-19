export type PrimaryKeyType = number;

export interface BaseEntity {
  id: PrimaryKeyType;
  created_at?: string;
  updated_at?: string | null;
  deleted_at?: string | null;
}

export interface LookupEntity {
  id: PrimaryKeyType;
  name: string;
}
