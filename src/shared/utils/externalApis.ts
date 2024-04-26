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
