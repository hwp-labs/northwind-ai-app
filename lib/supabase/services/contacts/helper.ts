import { startCase } from "lodash";
import { UNKNOWN } from "@/constants";
//
import { BaseHelper } from "../base/helper";
import { ContactEntity } from "./types";

type T = ContactEntity;

export class ContactHelper extends BaseHelper {
  private c?: T;

  constructor(contact?: unknown) {
    super(contact);
    if (contact) this.c = contact as T;
  }

  setContact(contact: unknown) {
    this.setBase(contact);
    this.c = contact as T;
  }
  // ////////////////////////////////////////////////////////////////////////

  DisplayName() {
    return this.c?.name ? startCase(this.c.name.split(" ")[0]) : UNKNOWN;
  }
}
