import queryString from "query-string";
import { omit, pick } from "lodash";

export const queryStringToObject = (str, options = {}) =>
  queryString.parse(str, {
    arrayFormat: "comma",
    ...options,
  });

export const objectToQueryString = (obj, options = {}) =>
  queryString.stringify(obj, {
    arrayFormat: "comma",
    ...options,
  });

export const omitFromQueryString = (str = "", keys = []) =>
  objectToQueryString(omit(queryStringToObject(str), keys));

export const addToQueryString = (str = "", fields = {}) =>
  objectToQueryString({
    ...queryStringToObject(str),
    ...fields,
  });

export const pickFromQueryString = (str = "", keys = []) =>
  objectToQueryString(pick(queryStringToObject(str), keys));
