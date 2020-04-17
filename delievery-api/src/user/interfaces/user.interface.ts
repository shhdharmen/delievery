import { Document } from "mongoose";

export interface User extends Document {
  readonly fullName: string;
  readonly countryCode: string;
  readonly phone: string;
  readonly verified: boolean;
  readonly email: string;
}
