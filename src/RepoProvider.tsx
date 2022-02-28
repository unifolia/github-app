import { createContext, useContext, useState } from "react";
import api from './GitHubApi';
interface ProviderProps {
    children: any;
};
export interface RepoProps {
    name: string;
    html_url: string;
    stargazers_count: number;
    language: string;
    id: number;
    description: string;
}
interface ContextProps {
    state: {
        repos: Array<RepoProps>;
        favRepos: Array<number>;
        showOnlyFavRepos: boolean;
        selectedLanguage: string;
        filteredByLanguage: Array<RepoProps>;
    };
    actions: {
        setFavRepos: (repos: Array<number>) => void;
        addToFavourites: (id: number) => void;
        setShowOnlyFavRepos: (bool: boolean) => void;
        setLanguage: (id: string) => void;
        fetchData: () => void;
    };
};

const defaultState = {
    state: {
        repos: [],
        favRepos: [],
        showOnlyFavRepos: false,
        selectedLanguage: '',
        filteredByLanguage: [],
    },
    actions: {
        setFavRepos: () => null,
        addToFavourites: () => null,
        setShowOnlyFavRepos: () => null,
        setLanguage: () => null,
        fetchData: () => null,
    },
};

const RepoContext = createContext<ContextProps>(defaultState);

const useRepoContext = () => {
    const context = useContext(RepoContext);
    return context;
};

const RepoProvider = ({ children }: ProviderProps) => {
    const [repos, setRepos] = useState<Array<RepoProps>>([]);
    const [favRepos, setFavRepos] = useState<Array<number>>([]);
    const [showOnlyFavRepos, setShowOnlyFavRepos] = useState<boolean>(false);
    const [selectedLanguage, setLanguage] = useState<string>('');

    const addToFavourites = (id: number) => {
        if (!favRepos.includes(id)) {
            setFavRepos([...favRepos, id]);
        } else {
            const updatedFavs = favRepos.filter(ids => ids !== id);
            setFavRepos(updatedFavs);
        };
    };

    const fetchData = async () => {
        await api().then(data => {
            if (data.length) {
                setRepos(data);
            }
        });

    };

    const filteredByLanguage = repos.filter(item => {
        if (selectedLanguage) {
            return item.language === selectedLanguage;
        } else {
            return item;
        };
    });

    const state = {
        repos,
        favRepos,
        filteredByLanguage,
        showOnlyFavRepos,
        selectedLanguage,
    };

    const actions = {
        setFavRepos,
        addToFavourites,
        setShowOnlyFavRepos,
        setLanguage,
        fetchData,
    };

    return (
        <RepoContext.Provider value={{ state, actions }}>
            {children}
        </RepoContext.Provider>
    );
};

export { RepoContext, useRepoContext, RepoProvider };