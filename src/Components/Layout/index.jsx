import PropTypes from 'prop-types';

const Layaut = ({ children }) => {
  return (
    <div className="flex flex-col mt-20 items-center">
      {children}
    </div>
  );
};

Layaut.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layaut;
