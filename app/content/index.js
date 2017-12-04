import React from "react";
import { render } from "react-dom";

import XMediaContainer from "./Container/XMediaContainer/XMediaContainer.js";

if (!document.getElementById("exTarget")) {
  const anchor = document.createElement("div");
  anchor.id = "exTarget";
  document.body.insertBefore(anchor, document.body.childNodes[0]);
}

if (module.hot) {
  module.hot.accept();
}

render(<XMediaContainer />, document.getElementById("exTarget"));
