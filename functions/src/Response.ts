import {
  IResponse,
  ISuccessResponse,
  IErrorResponse,
} from "../../shared/types";

export const SuccessResponse = ({
  message = "Success!",
  errorField = null,
  res = null,
}: ISuccessResponse): IResponse => {
  return {
    error: false,
    message,
    errorField,
    res,
  };
};

export const ErrorResponse = ({
  message = "Error",
  errorField = null,
  res = null,
}: IErrorResponse): IResponse => {
  return {
    error: true,
    message,
    errorField,
    res,
  };
};
