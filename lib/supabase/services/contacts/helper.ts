import { startCase } from "lodash";
import { EMPTY_STR, UNKNOWN } from "@/constants";
//
import { BaseHelper } from "../base/helper";
import { ContactEntity } from "./types";

type T = ContactEntity;

export class ContactHelper extends BaseHelper {
  private _?: T;

  constructor(contact?: unknown) {
    if (contact) {
      super(contact);
      this._ = contact as T;
    }
  }

  setContact(contact: unknown) {
    this._ = contact as T;
  }

  get DisplayName() {
    return this._?.name ? startCase(this._.name.split(" ")[0]) : UNKNOWN;
  }
}
