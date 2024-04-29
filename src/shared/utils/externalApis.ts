import {Genre, MovieDetails} from '../types/movies';

/**
 * Convert the sampleapis ids like 'action-adventure'
 * to a capitalized value replacing the - for spaces.
 * ex: 'Action Adventure'
 */
export const sanitizesampleapisIDs = (apiId: string) => {
  let parts = apiId.split('-');
  let capitalizedParts = parts.map(
    part => part.charAt(0).toUpperCase() + part.slice(1),
  );
  let result = capitalizedParts.join(' ');

  return result;
};

export const createGenreBySampleapiIDs = (apiId: string): Genre => ({
  id: apiId,
  value: sanitizesampleapisIDs(apiId),
});

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
