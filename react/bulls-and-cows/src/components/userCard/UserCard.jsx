import './UserCard.scss';
import femaleImg from '../../images/woman-with-laptop-thinking.png';
import maleImg from '../../images/guy-orange.PNG';
import justUserImg from '../../images/user02.png';

export default function UserCard({user}) {

  const { fullName, email, role } = user;

  let imgSrc = !user.gender ? justUserImg : user.gender === 'f' 
                            ? femaleImg : maleImg;

  return (
    <li className="card mb-2">

        <div className="row">

            <div className="col-4">
                <img src={imgSrc} className="img-fluid rounded-start" alt="" />
            </div>
            <div className="col-7 card-body">
                <h5 className="card-title">{fullName}</h5>
                <p className="card-text">Email: {email}</p>
                <p className="card-text"><small className="text-muted">
                    Role: {role}
                </small></p>
            </div>
            <div className="col-1">

            </div>

        </div>

    </li>
  )
}
