import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete-icon.svg';

const Wrapper = styled.li`
    display: flex;
    align-items: center;
    position: relative;

    &:not(:last-child)::after {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: lightgrey;
    }
`;

const StyledButton = styled.button`
    width: 25px;
    height: 25px;
    background-color: #c0c7d6;
    border-radius: 50px;
    border: none;
    color: white;

    svg {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const UsersListItem = ({ userData: { average, name, attendance } }) => (
    <Wrapper>
        <div>{average}</div>
        <div>
            <p>{name}</p>
            <p>{attendance}</p>
        </div>
        <StyledButton><DeleteIcon /></StyledButton>

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
