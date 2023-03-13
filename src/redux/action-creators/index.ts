import * as LoginActionCreators from './Login';
import * as ProfileActionCreators from './Profile';
import * as UsersActionCreators from './Users';
import * as CategoriesActionCreators from './Categories';
import * as NewActionCreators from './New';
import * as CategoryActionCreators from './Category';
import * as ArtworkActionCreators from './Artwork';
import * as PostActionCreators from './Post';
import * as HeaderActionCreators from './Header';
import * as FavoriteActionCreators from './Favorite';
import * as LikeActionCreators from './Like';
import * as SubscriptionsActionCreators from './Subscription';

export default  {
    ...LoginActionCreators,
    ...ProfileActionCreators,
    ...UsersActionCreators,
    ...CategoriesActionCreators,
    ...NewActionCreators,
    ...CategoryActionCreators,
    ...ArtworkActionCreators,
    ...PostActionCreators,
    ...HeaderActionCreators,
    ...FavoriteActionCreators,
    ...LikeActionCreators,
    ...SubscriptionsActionCreators
}