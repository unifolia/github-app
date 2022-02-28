import axios from 'axios';

const githubEndpoint = 'https://api.github.com/search/repositories?q=created:%3E2017-01-10&sort=stars&order=desc';

const fetchData = () => 
    axios.get(githubEndpoint).then(res => {
        return res.data.items.map((item: any) => {
            return {
                name: item.name,
                html_url: item.html_url,
                stargazers_count: item.stargazers_count,
                language: item.language,
                id: item.id,
                description: item.description,
            };
        });
    });

export default fetchData;