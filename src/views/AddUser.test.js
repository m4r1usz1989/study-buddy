import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import AddUser from './AddUser';
import Dashboard from './Dashboard';

describe('Form field', () => {
    it('Renders the component', () => {
        renderWithProviders(
            <>
                <AddUser />
                <Dashboard />
            </>
        );
        fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Grazyna' } });
        fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '33%' } });
        fireEvent.change(screen.getByTestId('Average'), { target: { value: '5' } });
        fireEvent.click(screen.getByText('Add'));
        screen.getByText('Grazyna');
    });
});
