import Repo from './components/Repo';
import Header from './components/Header';
import { useRepoContext } from './RepoProvider';
import { Main, ReposList } from './components/Styles';
import { useEffect, useState } from 'react';

import axios from 'axios';

const Content = () => {
    const githubEndpoint = 'https://api.github.com/search/repositories?q=created:%3E2017-01-10&sort=stars&order=desc';

    const [allRepos, setRepoArray] = useState<any[]>([]);
    const { state } = useRepoContext();

    useEffect(() => {
        axios.get(githubEndpoint).then(res => {
            setRepoArray(res.data.items);
        })
    }, []);

    const favouritedRepos = [...allRepos]
    .filter((item) => state.favRepos.includes((item as any).id));
        
    const isFavorited = state.showOnlyFavRepos ? favouritedRepos : allRepos;

    const filteredLanguageArray = isFavorited.filter((item) => {
        if (state.selectedLanguage) {
            return item.language === state.selectedLanguage;
        } else {
            return item;
        };
    });

    return (
        <>
            <Header selectedLanguage={state.selectedLanguage}/>
            <Main>
                <ReposList>
                {filteredLanguageArray.map(item => {
                    let { name, html_url, stargazers_count, language, id, description } = item;

                    return (
                        <Repo key={name} name={name} html_url={html_url} stargazers_count={stargazers_count} language={language} id={id} description={description}/>
                    )
                })}
                </ReposList>
            </Main>
        </>
    );
};

export default Content;
