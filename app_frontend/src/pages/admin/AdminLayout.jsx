import PropTypes from "prop-types";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <header></header>
      {children}
      <footer></footer>
    </div>
  );
};
AdminLayout.PropTypes = {
  children: PropTypes.element.isRequired,
};
export default AdminLayout;
