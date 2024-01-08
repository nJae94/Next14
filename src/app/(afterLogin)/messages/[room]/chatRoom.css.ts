import {globalStyle, style} from "@vanilla-extract/css";

export const Wrapper = style({
    width: '600px',
    minHeight: '100dvh',
    borderColor: 'rgb(239, 243, 244)',
    borderRightWidth: '1px',
    borderLeftWidth: '1px',
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    padding: '0 16px',
});

export const Header = style({
    display: 'flex',
    height: '54px',
    alignItems: 'center',
});

globalStyle(`${Header} h2`, {
    marginLeft: '40px',
    fontSize: '20px',
});

export const UserInfo = style({
    padding: '20px 16px 60px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    transitionProperty: 'background-color',
    transitionDuration: '0.2s',
    borderColor: 'rgb(239, 243, 244)',
    cursor: 'pointer',
    borderBottom: '1px solid rgb(239, 243, 244)',
    marginBottom: '20px',

    ':hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
    },
});

globalStyle(`${UserInfo} img`, {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
});

export const Message = style({
    paddingBottom: '24px',
});

export const Content = style({
    lineHeight: '20px',
    padding: '12px 16px',
    fontSize: '15px',

    get selectors() {
        return {
            [`${MyMessage} &`]: {
                backgroundColor: '#0083eb',
                borderTopLeftRadius: '22px',
                borderTopRightRadius: '22px',
                borderBottomLeftRadius: '22px',
                color: 'white',
            },
            [`${YourMessage} &`]: {
                backgroundColor: '#eff3f4',
                borderTopLeftRadius: '22px',
                borderTopRightRadius: '22px',
                borderBottomRightRadius: '22px',
                color: 'black',
            }
        };
    }
});

export const MyMessage = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
});


export const YourMessage = style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
});


export const DateWrapper = style({
    marginTop: '8px',
    color: '#536471',
    fontSize: '13px',
});
