import { registerPlugin } from '@capacitor/core';
import { DeviceWeb } from "./web";
const Device = registerPlugin('Device', {
    web: DeviceWeb,
});
export * from './definitions';
export { Device };
//# sourceMappingURL=index.js.map