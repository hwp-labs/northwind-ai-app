/**
# This is a Presenter/viewModel design pattern class

## Ruleset
- Extend BaseHelper with BaseEntity helper methods ~ get DateCreated(), get IsDeleted()
- Use type `T` to avoid rewriting the model interface (ContactEntity)
- Use private property `__` to avoid rewriting the model name (contact)
- Accept model as `unknown` and then type-cast to avoid model DTO conflicts
- Create getter methods for transformed field/non-field values ONLY ~ get name()
- Use PascalCasing to distinguish non-field from field methods ~ get DisplayName()`
- All getter and computed methods should return appropriate fallback values ~ EMPTY_STR, UNKNOWN
*/

import { startCase } from "lodash";
import { EMPTY_STR, UNKNOWN } from "@/constants/LOCALE";
import { ContactEntity } from "./types";

type T = ContactEntity;

export class ContactHelper {
  private __?: T;

  constructor(contact?: unknown) {
    if (contact) this.__ = contact as T;
  }

  set contact(contact: unknown) {
    this.__ = contact as T;
  }

  get name() {
    return this.__?.name ? startCase(this.__.name) : EMPTY_STR;
  }

  get DisplayName() {
    return this.__?.name ? startCase(this.__.name.split(" ")[0]) : UNKNOWN;
  }
}
