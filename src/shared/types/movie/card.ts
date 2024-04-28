import {Movie} from '../movies';

export type CardProps = {
  movie: Movie;
  favorite?: boolean;
  onPress: () => void;
};
