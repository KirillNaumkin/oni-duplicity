import { OniSaveState } from "../state";

import { createServiceSelector } from "./utils";

export const saveGameSelector = createServiceSelector(
  (state: OniSaveState) => state.saveGame
);

export const isMockSelector = createServiceSelector(
  (state: OniSaveState) => state.isMock
);

export const isSaveModifiedSelector = createServiceSelector(
  (state: OniSaveState) => state.isModified
);
