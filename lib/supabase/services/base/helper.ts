/**
# This is a Presenter/viewModel design pattern class

## Ruleset
- Use type `T` to avoid rewriting the model interface (BaseEntity)
- Use private property `__` to avoid rewriting the model name (base)
- Accept model as `unknown` and then type-cast to avoid model DTO conflicts
- Create explicit setMethod after constructor for memoized usage within a loop ~ setBase()
- Create camelCasing methods for transformed field values ~ get createdAt()
- Create PascalCasing methods for transformed non-field values ~ get IsDeleted()`
- All getter and computed methods should return appropriate fallback values ~ EMPTY_STR, HYPHENS
- Derived entity helpers should also extend BaseHelper where applicable
*/

import { momentUtil } from "@/utils/moment-util";
import { HYPHENS } from "@/constants";
// 
import { BaseEntity } from "./types";

type T = BaseEntity;

export class BaseHelper {
  private __?: T;

  constructor(base?: unknown) {
    if (base) this.__ = base as T;
  }

  setBase(base: unknown) {
    this.__ = base as T;
  }

  get createdAt() {
    return this.__?.created_at
      ? momentUtil.verbose(this.__.created_at)
      : HYPHENS;
  }

  get updatedAt() {
    return this.__?.updated_at
      ? momentUtil.verbose(this.__.updated_at)
      : HYPHENS;
  }

  get deletedAt() {
    return this.__?.deleted_at
      ? momentUtil.verbose(this.__.deleted_at)
      : HYPHENS;
  }

  get IsDeleted() {
    return this.__?.deleted_at ? true : false;
  }
}
