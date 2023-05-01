import Player from './Player';

import type { Nullable } from '~/typings/utils';

export interface HandlePlayer {
  reRender: () => void;
}

export interface PlayerProps {
  className?: string;
  url: string;
  start?: Nullable<number>;
  end?: Nullable<number>;
}

export default Player;
