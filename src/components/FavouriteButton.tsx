import { useRepoContext } from '../RepoProvider';
import { FavButton } from './Styles';

interface IFavouriteButton {
    id: number,
};

const FavouriteButton = ({ id }: IFavouriteButton) => {
    const { actions, state } = useRepoContext();
    const isFav = state.favRepos.includes(id);

    return (  
        <FavButton 
            data-testid="fav"
            isFav={isFav} 
            onClick={() => { actions.addToFavourites(id) }}
        >
            ♥
        </FavButton>
    );
};

export default FavouriteButton;
