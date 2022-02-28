/* eslint-disable @typescript-eslint/no-unused-expressions */
import FavouriteButton from "./FavouriteButton";
import { useRepoContext } from '../RepoProvider';
import { RepoListItem, ItemH2, ItemH3, ItemA, ItemP, LanguageToggle } from './Styles';

interface IRepo {
    description: string,
    html_url: string;
    id: number,
    language: string,
    name: string;
    stargazers_count: number,
};

const Repo = ({ description, html_url, id, language, name, stargazers_count }: IRepo) => {
    const { actions, state } = useRepoContext();
    const isFav = state.favRepos.includes(id);

    const setLanguageFilter = () => {
        if (state.selectedLanguage !== language) {
            actions.setLanguage(language);
        } else {
            actions.setLanguage('');
        };
    };

    const showLanguageFilter = () => {
        if (language) {
            return (
                <LanguageToggle onClick={setLanguageFilter} languageActive={state.selectedLanguage}>
                    Filter {language}
                </LanguageToggle>
            ) 
        } else {
            return (
                <span>Unknown</span>
            )
        };
    };

    return (
        <RepoListItem key={name} isFav={isFav} data-testid="repo">
            <FavouriteButton id={id} />
            <ItemH2 isFav={isFav}>Name: {name}</ItemH2>
            <ItemH3 isFav={isFav}>Stars: {stargazers_count}</ItemH3>
            <ItemH3 isFav={isFav}>Language: {language} { showLanguageFilter() }
            </ItemH3>
            <ItemH3 isFav={isFav}>Location:&nbsp; 
                <ItemA isFav={isFav} href={html_url}>{html_url}</ItemA>
            </ItemH3>

            <ItemP isFav={isFav}>Description: {description}</ItemP>
        </RepoListItem>
    );
};

export default Repo;
