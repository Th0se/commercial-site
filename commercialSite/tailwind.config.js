/**
 * @format
 * @type {import('tailwindcss').Config}
 */
import { createThemes } from 'tw-colors';

export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
export const theme = {
    extend: {
        screens: {
            sm: { min: '320px', max: '767px' },
        },
    },
};
export const plugins = [
    createThemes({
        dark: {
            primaryBackground: '#1B1B1B',
            secondaryBackground: '#242424',
            tertiaryBackground: '#333333',
            cop: '#156C6C',
            text: 'white',
        },
        light: {
            primaryBackground: '#2EC4B6',
            secondaryBackground: '#CBF3F0',
            tertiaryBackground: '#FFFFFF',
            cop: '#FF9F1C',
            text: 'black',
        },
        pastelChaos: {
            primaryBackground: '#FAD02E',
            secondaryBackground: '#F07E6E',
            tertiaryBackground: '#7ED8D8',
            cop: '#E3562A',
            text: 'black',
        },
        amethystAurora: {
            primaryBackground: '#2E0854',
            secondaryBackground: '#401A73',
            tertiaryBackground: '#5F3C8D',
            cop: '#B85FB4',
            text: 'white',
        },
    }),
];
