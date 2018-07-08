import {environment} from '../../environments/environment';

export const URL_API = environment.api;

export const CONFIG = {
    cognito: {
        // e.g. us-east-2_uXboG5pAb
        userPoolId: 'eu-west-1_XbU2J5Ewi',
        // e.g. 25ddkmj4v6hfsfvruhpfi7n4hv
        userPoolClientId: '4ge8rc2mra4d2vrckmvns962ho',
        // e.g. us-east-2
        region: 'eu-west-1'
    },
    api: {
        // e.g. https://rc7nyt4tql.execute-api.us-west-2.amazonaws.com/prod'
        invokeUrl: 'https://je957yp1yg.execute-api.sa-east-1.amazonaws.com/prod/myContact'
    }
};
