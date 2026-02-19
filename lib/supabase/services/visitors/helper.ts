import { startCase } from "lodash";
import { EMPTY_STR, UNKNOWN } from "@/constants";
//
import { BaseHelper } from "../base/helper";
import { VisitorEntity } from "./types";

type T = VisitorEntity;

export class VisitorHelper extends BaseHelper {
  private _?: T;

  constructor(visitor?: unknown) {
    super(visitor);
    if (visitor) this._ = visitor as T;
  }

  setVisitor(visitor: unknown) {
    this._ = visitor as T;
  }
}
