import {Credentials} from "../models/Credentials";
import {User} from "../models/Users";


export interface AimState {
  credentials: Credentials | undefined,
  isLoading: boolean,
  error: string
  user: User | undefined
}

export const initialState: AimState = {
  credentials: undefined,
  error: "",
  isLoading: false, user: undefined
}
