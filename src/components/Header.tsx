import { useRepoContext } from '../RepoProvider';
import { StyledHeader, StyledH1, OnlyFavouritesButton, SelectedLanguage } from './Styles';

interface IProps {
    selectedLanguage: string;
};

const Header = ( {selectedLanguage}: IProps ) => {
  const { actions, state } = useRepoContext();

  const handleToggleRepos = () => {
    actions.setShowOnlyFavRepos(!state.showOnlyFavRepos);
  };

  return (
      <StyledHeader>
        <StyledH1>Trending GitHub Repos</StyledH1>
        <h2>Selected Language: <SelectedLanguage>{selectedLanguage}</SelectedLanguage>
        </h2>
        <OnlyFavouritesButton onClick={handleToggleRepos}>
          Only Favourites
        </OnlyFavouritesButton>
      </StyledHeader>
  );
};

export default Header;
