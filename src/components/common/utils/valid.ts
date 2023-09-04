import { IUser } from "models/api";

const isValid = ({ email, password }: IUser) => {
  if (!!email.match(/.*@.*/) && !!password.match(/^.{8,}$/)) {
    return false;
  }
  return true;
};

export default isValid;
