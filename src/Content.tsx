import { useEffect } from 'react';
import Repo from './components/Repo';
import Header from './components/Header';
import { useRepoContext, RepoProps } from './RepoProvider';
import { Main, ReposList } from './components/Styles';

const Content = () => {
    const { state, actions } = useRepoContext();

    const filteredRepos: Array<RepoProps> = state.showOnlyFavRepos ?
    [...state.filteredByLanguage].filter((item) => state.favRepos.includes((item as any).id)) : state.filteredByLanguage;

    useEffect(() => {
        if (!state.repos.length) {
            actions.fetchData();
        }
    }, [actions, state]);


    return (
        <>
            <Header />
            <Main>
                <ReposList>
                    {filteredRepos.map((item: RepoProps) => {
                        let { description, html_url, id, language, name, stargazers_count } = item;

                        return (
                            <Repo
                                description={description}
                                html_url={html_url}
                                id={id}
                                key={name}
                                language={language}
                                name={name}
                                stargazers_count={stargazers_count}
                            />
                        )
                })}
                </ReposList>
            </Main>
        </>
    );
};

export default Content;
