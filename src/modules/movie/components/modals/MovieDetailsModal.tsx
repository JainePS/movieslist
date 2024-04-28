import React from 'react';
import CommonModal from '../../../../shared/components/organisms/CommomModal';
import Details from '../views/DetailsView';
import {Movie} from '../../../../shared/types/movies';

type Props = {
  movie: Movie;
  modalVisible: boolean;
  onCloseDetailsModal: () => void;
};

const MovieDetailsModal = ({
  movie,
  modalVisible = false,
  onCloseDetailsModal,
}: Props) => {
  return (
    <CommonModal modalVisible={modalVisible} onCloseModal={onCloseDetailsModal}>
      <Details movie={movie} />
    </CommonModal>
  );
};

export default MovieDetailsModal;
