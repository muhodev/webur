import * as React from "react";

function SvgArticle(props) {
  return (
    <svg height="1em" viewBox="0 0 24 24" width="1em" {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M20.41 8.41l-4.83-4.83c-.37-.37-.88-.58-1.41-.58H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9.83c0-.53-.21-1.04-.59-1.42zM7 7h7v2H7V7zm10 10H7v-2h10v2zm0-4H7v-2h10v2z" />
    </svg>
  );
}

export default SvgArticle;
