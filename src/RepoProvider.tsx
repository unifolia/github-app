import { createContext, useContext, useState } from "react";

interface IProvider {
    children: any;
};

interface IContext {
    state: {
        favRepos: Array<number>;
        showOnlyFavRepos: boolean;
        selectedLanguage: string;
    };
    actions: {
        setFavRepos: (repos: Array<number>) => void;
        addToFavourites: (id: number) => void;
        setShowOnlyFavRepos: (bool: boolean) => void;
        setLanguage: (id: string) => void;
    };
};

const defaultState = {
    state: {
        favRepos: [],
        showOnlyFavRepos: false,
        selectedLanguage: '',
    },
    actions: {
        setFavRepos: () => null,
        addToFavourites: () => null,
        setShowOnlyFavRepos: () => null,
        setLanguage: () => null,
    },
};

const RepoContext = createContext<IContext>(defaultState);

const useRepoContext = () => {
    const context = useContext(RepoContext);
    return context;
};

const RepoProvider = ({ children }: IProvider) => {
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

    const state = { favRepos, showOnlyFavRepos, selectedLanguage };
    const actions = { setFavRepos, addToFavourites, setShowOnlyFavRepos, setLanguage };

    return (
        <RepoContext.Provider value={{ state, actions }}>
            {children}
        </RepoContext.Provider>
    );
};

export { RepoContext, useRepoContext, RepoProvider };