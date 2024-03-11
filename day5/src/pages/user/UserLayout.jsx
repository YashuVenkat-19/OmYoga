import PropTypes from "prop-types";

const UserLayout = ({ children }) => {
  return (
    <div>
      <header></header>
      {children}
      <footer></footer>
    </div>
  );
};
