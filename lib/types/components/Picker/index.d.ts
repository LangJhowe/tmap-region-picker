import React from 'react';
import { LoadConfig } from './util';
import './picker.less';
interface PickerProps {
    className?: string;
    config: LoadConfig;
}
declare const Picker: React.FC<PickerProps>;
export default Picker;
