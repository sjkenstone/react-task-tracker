import PropTypes from 'prop-types'
import Button from './Button'

function Header({title, onAdd, showAdd}) {
  const onClick = () => {
    onAdd()
  };

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd ? 'red': 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onClick} />
    </header>
  );
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
