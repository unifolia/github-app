import styled, { css } from 'styled-components';

// Sorry for stealing
const colourPalette = {
    veedGreen: 'rgba(35, 236, 164, 0.2)',
    veedPink: 'rgba(255, 119, 168, 1)',
    veedYellow: 'rgba(254, 208, 119, 0.5)',
    veedBrown: '#7d5b41',

    veedGreenText: '#30715a',
}

interface IProps {
    isFav: boolean;
}

interface ILanguageToggle {
    languageActive: string;
}

interface IRepoListItem extends IProps {
    key: string;
}

const selectedColour = () => css<IProps>`
  color: ${props => props.isFav ? colourPalette.veedGreenText : '#192033'};
`

// Header
export const StyledHeader = styled.header`
    width: 100%;
    position: fixed;
    padding: 0.5rem 3rem 1rem 3rem;
    background: #f7f7f8 ;
    z-index: 1;
    border-bottom: 3px solid ${colourPalette.veedYellow};
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1200px) {
        flex-direction: column;
    };
`

export const StyledH1 = styled.h1`
    font-size: 2rem;
    margin: 0;
`

export const SelectedLanguage = styled.span`
    color: ${colourPalette.veedBrown};
`

export const OnlyFavouritesButton = styled.button`
    padding: 12px 22px;
    border-radius: 8px;
    border: none;
    background-color: #192033;
    color: #fff;
    white-space: nowrap;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        background: ${colourPalette.veedBrown};
    };
`
// Main body
export const Main = styled.div`
    position: relative;
    top: 130px;
    @media (max-width: 1200px) {
        top: 200px;
    };
    @media (max-width: 460px) {
        top: 280px;
    };
`;

export const ReposList = styled.ul`
    list-style: none;
    padding: 0 3rem;
    margin: 0 auto;
    width: 80%;
    box-sizing: border-box;
    // margin-top: 5rem;
`;

// Items
export const RepoListItem = styled.li<IRepoListItem>`
    border-radius: 20px;

    margin-bottom: 20px;
    padding: 20px;

    background-color: ${props => 
        props.isFav ? colourPalette.veedGreen : '#fff'
    };
`;

export const FavButton = styled.button<IProps>`
    border: none;
    background: none;
    cursor: pointer;

    font-size: 5rem;
    color: ${props => 
        props.isFav ? colourPalette.veedPink : '#192033'
    };
`;

export const LanguageToggle = styled.button<ILanguageToggle>`
    padding: 6px 11px;
    border-radius: 1000px;
    border: none;
    color: #fff;
    white-space: nowrap;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    @media (max-width: 600px) {
        margin: 10px 0;
        font-size: 0.8rem;
    };

    background-color: ${props => 
        props.languageActive ? colourPalette.veedPink : '#192033'
    };
`;

export const ItemH2 = styled.h2`
    ${selectedColour};
`;

export const ItemH3 = styled.h3`
    ${selectedColour};
`;

export const ItemP = styled.p`
    ${selectedColour};
`;

export const ItemA = styled.a`
    ${selectedColour};
`;
