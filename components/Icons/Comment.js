import * as React from "react";

function SvgComment(props) {
  return (
    <svg height="1em" viewBox="0 0 24 24" width="1em" {...props}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M20 17.17L18.83 16H4V4h16v13.17zM20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4c0-1.1-.9-2-2-2z" />
    </svg>
  );
}

export default SvgComment;
