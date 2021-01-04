import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import central from '../../assets/icons/central.png';
import contract from '../../assets/icons/contract.png';
import decentralized from '../../assets/icons/decentralized.png';
import error_2 from '../../assets/icons/error_2.png';
import group from '../../assets/icons/group.png';
import home from '../../assets/icons/home.png';
import layoutSetting from '../../assets/icons/layout_setting.png';
import manage from '../../assets/icons/manage.png';
import monitoring from '../../assets/icons/monitoring.png';
import reload from '../../assets/icons/reload.png';
import reportSearch from '../../assets/icons/report_search.png';
import template from '../../assets/icons/template.png';
import transaction from '../../assets/icons/transaction.png';
import transaction_2 from '../../assets/icons/transaction_2.png';
import profile from '../../assets/icons/profile.png';
import contact from '../../assets/icons/contact.png';
import name from '../../assets/icons/name.png';
import birthday from '../../assets/icons/birthday.png';
import address from '../../assets/icons/address.png';
import phone from '../../assets/icons/phone.png';
import mail from '../../assets/icons/mail.png';
import facebook from '../../assets/icons/facebook.png';
import github from '../../assets/icons/github.png';
import experience from '../../assets/icons/experience.png';
import qrcode from '../../assets/icons/qr-code.png';

interface IProps {
    name: string;
    width?: number;
    height?: number;
    className?: any;
    alt?: string;
}

const Icons = (props: IProps) => {
    const src = () => {
        switch (props.name) {
            case 'icon-home':
                return home;
            case 'icon-template':
                return template;
            case 'icon-manage':
                return manage;
            case 'icon-decentralized':
                return decentralized;
            case 'icon-central':
                return central;
            case 'icon-contract':
                return contract;
            case 'icon-reload':
                return reload;
            case 'icon-group':
                return group;
            case 'icon-monitoring':
                return monitoring;
            case 'icon-transaction':
                return transaction;
            case 'icon-layout-setting':
                return layoutSetting;
            case 'icon-report-search':
                return reportSearch;
            case 'icon-transaction-2':
                return transaction_2;
            case 'icon-profile':
                return profile;
            case 'icon-contact':
                return contact;
            case 'icon-name':
                return name;
            case 'icon-birthday':
                return birthday;
            case 'icon-address':
                return address;
            case 'icon-phone':
                return phone;
            case 'icon-mail':
                return mail;
            case 'icon-facebook':
                return facebook;
            case 'icon-github':
                return github;
            case 'icon-experience':
                return experience;
            case 'icon-qrcode':
                return qrcode;
            default:
                return error_2;
        }
    };

    const useStyles = makeStyles((theme) => ({
        default: {},
    }));

    const classes = useStyles();

    return (
        <img
            className={props.className || classes.default}
            src={src()}
            width={props.width || '50'}
            height={props.height || '50'}
            alt={props.alt || 'nice'}
        />
    );
};

export default Icons;
