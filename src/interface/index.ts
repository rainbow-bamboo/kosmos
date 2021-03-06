import { render } from "react-dom";
import { html } from "htm/react";

import Transcript from "./transcript";
import Control from "./control";
import { Store } from "redux";

export default function Interface(store: Store) {
  const transcriptPlaceholder = document.getElementById("transcript");
  const controlPlaceholder = document.getElementById("control");

  render(html`<${Transcript} store="${store}" />`, transcriptPlaceholder);
  render(html`<${Control} store=${store} />`, controlPlaceholder);
}