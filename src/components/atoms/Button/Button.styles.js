import React from 'react'
import styled from 'styled-components';

export const StyledButton = styled.button`
    width: 25px;
    height: 25px;
    background-color: ${({theme}) => theme.colors.gray};
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