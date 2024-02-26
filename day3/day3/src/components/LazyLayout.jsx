import { Suspense } from "react";
import PropTypes from "prop-types";
import Loaders from "./Loaders";

const LazyLayout = ({ component: Component, ...rest }) => {
  return (
    <Suspense fallback={<Loaders />}>
      <Component {...rest} />
    </Suspense>
  );
};
LazyLayout.propTypes = {
  component: PropTypes.elementType.isRequired,
};
export default LazyLayout;
