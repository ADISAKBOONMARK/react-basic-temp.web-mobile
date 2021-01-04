import { APP_CONFIG } from '../../AppConfig';
import moment from 'moment';
class MasterGenProvider {
    async genTid() {
        return (
            APP_CONFIG.NODE_NAME +
            '-' +
            moment().format('YYMMDD') +
            new Array(11).join().replace(/(.|$)/g, function () {
                return ((Math.random() * 36) | 0).toString(36)[Math.random() < 0.5 ? 'toString' : 'toUpperCase']();
            })
        );
    }

    async genJWTId() {
        return new Array(12).join().replace(/(.|$)/g, function () {
            return ((Math.random() * 36) | 0).toString(36)[Math.random() < 0.5 ? 'toString' : 'toUpperCase']();
        });
    }

    async genXsession() {
        return new Array(22).join().replace(/(.|$)/g, function () {
            return ((Math.random() * 36) | 0).toString(36)[Math.random() < 0.5 ? 'toString' : 'toUpperCase']();
        });
    }
}

export default MasterGenProvider;
