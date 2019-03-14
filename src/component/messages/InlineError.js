// import React from "react";
// import PropTypes from "prop-types";

// function InlineError({ text }) {
//   return <span>{text}</span>;
// }

// InlineError.propTypes = {
//   text: PropTypes.string
// };

// export default InlineError;

import React from "react";
import PropTypes from "prop-types";

const InlineError = ({ text }) => (
  <span style={{ color: "#ae5856" }}>{text}</span>
);

InlineError.propTypes = {
  text: PropTypes.string.isRequired
};

export default InlineError;
