import {globalStyle, style} from "@vanilla-extract/css";

export const LogOutButton = style({
    width: '66px',
    height: '66px',
    padding: '12px',
    display: 'flex',
    margin: '12px 0',
    cursor: 'pointer',
    border: 'none',
    alignItems: 'center',
    backgroundColor: '#fff',
    textAlign: 'left',

    '@media': {
        'all and (min-width: 1300px)': {
            width: '258px',
        }
    },
    ':hover': {
        backgroundColor: 'rgba(15,20,25, 0.1)',
        borderRadius: '33px',
    }
});

export const LogOutUserName = style({
    display: 'none',

    '@media': {
        'all and (min-width: 1300px)': {
            margin: '0 12px',
            display: 'inline-block',
        }
    },

    selectors: {
        [`div:first-child &`]: {
            fontWeight: 'bold',
        }
    }
});


export const LogOutUserImage = style({
    display: 'flex',
    alignItems: 'center',
});

globalStyle(`${LogOutUserImage} img`, {
    width: '40px',
    borderRadius: '50%',
});
