import type { LucideIcon } from "lucide-react";
import { Control, FieldValues, Path } from "react-hook-form";

export interface MenuItem {
  label: string;
  path: string;
  Icon?: LucideIcon;
}
export interface OptionItem {
  label: string;
  value: string;
  disabled?: string;
  item?: unknown;
}
export interface BaseInput {
  name: string;
  label?: React.ReactNode;
  required?: boolean;
  darkInvert?: boolean;
}
export interface ControlledInput<T extends FieldValues> extends BaseInput {
  name: Path<T>;
  control?: Control<T>;
  placeholder?: string;
  description?: string;
}
