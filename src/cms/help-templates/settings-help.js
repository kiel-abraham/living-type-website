import React from 'react';
import { Alert } from 'reactstrap';
import * as Help from './cms-help';

const SettingsHelp = () => (
    <div color="info">
        This will have a modal for help docs
        <Help.Name />
        <Help.MetaDesc />
    </div>
)

export default SettingsHelp;