import './Header.scss';

function Header({title}) {
  return (
    <h1 className="display-1 text-primary text-center">
        {title}
    </h1>
  )
}

export default Header