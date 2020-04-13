import React from "react";
import data from "../../data.json";
import { comingSoon } from "../../data.utils";

import ComingSoon from "../../components/coming-soon/coming-soon.component";

export default function devQuentin() {
  return (
    <div>
      <ComingSoon data={comingSoon(data)} />
    </div>
  );
}
