import { useRepoContext } from '../RepoProvider';
import { StyledHeader, StyledH1, OnlyFavouritesButton, SelectedLanguageHeading, SelectedLanguageSpan } from './Styles';

const Header = () => {
  const { actions, state } = useRepoContext();

  const handleToggleRepos = () => {
    actions.setShowOnlyFavRepos(!state.showOnlyFavRepos);
  };

  return (
      <StyledHeader>
        <StyledH1 data-testid="header">Trending GitHub Repos</StyledH1>
        <SelectedLanguageHeading>Selected Language:&nbsp; 
          <SelectedLanguageSpan>{state.selectedLanguage}</SelectedLanguageSpan>
        </SelectedLanguageHeading>
        <OnlyFavouritesButton onClick={handleToggleRepos}>
          Only Favourites
        </OnlyFavouritesButton>
      </StyledHeader>
  );
};

export default Header;
