// import suspense and proptypes
import React, { lazy, Suspense } from "react";
import PropTypes from "prop-types";
// import the lazy layout

const LazyLayout = ({ component: Component, ...rest }) => {
  return (
    <Suspense fallback="Loading...">
      <Component {...rest} />
    </Suspense>
  );
};

LazyLayout.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default LazyLayout;
