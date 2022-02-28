import App from './App';
import { render, screen } from '@testing-library/react';
import api from './GitHubApi';

describe('Content tests', () => {
    test('App loads', () => {
        render(
            <App />
        );
        expect(screen.getByTestId('header')).toBeInTheDocument();        
    });

    test('Successfully fetch endpoint data', async () => {
            render(
                <App />
            );
            await api().then(() => {
                expect(screen.getAllByTestId('repo').length).not.toBeLessThan(0);
            });
    }, 7000);
});