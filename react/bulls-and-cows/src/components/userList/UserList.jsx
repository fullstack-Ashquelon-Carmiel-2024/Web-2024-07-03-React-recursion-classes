import './UserList.scss';
import UserCard from '../userCard/UserCard';

export default function UserList({users}) {
  return (
    // col-12 - 12 columns for the narowest screen (xs - extra small)
    // col-sm-6 - starting from the small screen - take the half of bootstrap
    <div className="col-12 col-sm-6 col-md-7">
        <ul>
{/* MISSION: create expression that if there are some users,
creates "map" of <UserCard user={user} /> for each user,
and if not, shows 
<p className="display-5">This is a sociopatic game: no users</p>
*/}
            {users.length > 0 ?
                users.map(user => 
                    <UserCard key={user.id} user={user} />):
                    <p className="display-5">
                        This is a sociopatic game: no users</p>
            }

        </ul>
    </div>
  )
}
