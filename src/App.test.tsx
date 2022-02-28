import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event'

import App from './App';
import api from './GitHubApi';
import { colourPalette } from './components/Styles';

describe('Content tests', () => {
    test('App loads', () => {
        render(
            <App />
        );
        expect(screen.getByTestId('header')).toBeInTheDocument();        
    });

    test('Successfully fetch endpoint data', async() => {
            render(
                <App />
            );
            await act(async () => {
                api().then(() => {
                    expect(screen.getAllByTestId('repo').length).not.toBeLessThan(0);
                });
            })
    });

    test('Favourite Items', async() => {
        render(
            <App />
        );

        await act(async () => {
            api().then(() => {
                screen
                .findByTestId('fav')
                .then(elem => {
                    userEvent.click(elem);
                    expect(elem).toHaveStyle((`background: ${colourPalette.veedPink}`));   
                });
            });
        })
    });
});