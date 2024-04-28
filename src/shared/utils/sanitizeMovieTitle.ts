import {MovieDetails} from '../types/movies';

export const sanitizeMovieTitles = (
  inputString: string,
  replacementChar: string,
) => {
  return inputString.split(' ').join(replacementChar);
};

/**
 * Response keys are capitalized, sanitizing to lowercase
 */
export const sanitizeMovieResponseKeys = (response: any): MovieDetails => {
  const sanitizedResponse: any = {};
  Object.keys(response).forEach(key => {
    const LOWERCASE_KEY = key.toLowerCase();
    sanitizedResponse[LOWERCASE_KEY] = response[key];
  });

  return sanitizedResponse;
};
