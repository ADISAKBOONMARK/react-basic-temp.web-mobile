const staticMenu = () => {
    return [
        {
            id: '1',
            name: 'Scan QRcode',
            path: '/scan-qrcode',
            icon: 'icon-qrcode',
            leaf: true,
            children: [],
        },
    ];
};

export default { staticMenu };
