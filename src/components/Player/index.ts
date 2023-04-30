import Player from './Player';

import type { Nullable } from '~/typings/utils';

export interface PlayerProps {
  url: string;
  start?: Nullable<number>;
  end?: Nullable<number>;
}

export default Player;
