import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button/Button';
import { Wrapper, StyledAverage, StyledInfo } from './UsersListItem.styles';
const UsersListItem = ({ userData: { average, name, attendance } }) => (
    <Wrapper>
        <StyledAverage value={average}>{average}</StyledAverage>
        <StyledInfo>
            <p>{name}</p>
            <p>attendance: {attendance}</p>
        </StyledInfo>
        <Button />
    </Wrapper>
);

UsersListItem.propTypes = {
    userData: PropTypes.shape({
        average: PropTypes.string,
        name: PropTypes.string.isRequired,
        attendance: PropTypes.string,
    }),
};

export default UsersListItem;
