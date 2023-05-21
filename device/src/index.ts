import { registerPlugin } from '@capacitor/core';

import {DeviceWeb } from "./web"
import type { DevicePlugin } from './definitions';

const Device = registerPlugin<DevicePlugin>('Device', {
  web: DeviceWeb,
});

export * from './definitions';
export { Device };
