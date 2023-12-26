import {globalStyle, style} from "@vanilla-extract/css";

export const Wrapper = style({
    width: '600px',
    borderColor: 'rgb(239, 243, 244)',
    borderRightWidth: '1px',
    borderLeftWidth: '1px',
    borderRightStyle: 'solid',
    borderLeftStyle: 'solid',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
});

export const HomeFixed = style({
    position: 'fixed',
    zIndex: '1',
    width: '598px',
    backgroundColor:' rgba(255, 255, 255, 0.85)',
    backdropFilter: 'blur(12px)',
    borderColor: 'rgb(239, 243, 244)',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
});

export const HomeText = style({
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: 'bold',
    padding: '12px 16px',
});

export const HomeTab = style({
    height: '53px',
    display: 'flex'
});

globalStyle(`${HomeTab} > div`, {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '15px',
    cursor: 'pointer',
    position: 'relative',
});

export const Link = style({
    ':hover': {
        backgroundColor: 'rgba(15,20,25, 0.1)',
    }
})

export const TabIndicator = style({
    height: '4px',
    alignSelf: 'center',
    backgroundColor: 'rgb(29, 155, 240)',
    minWidth: '56px',
    width: '56px',
    position: 'absolute',
    bottom: '0px',
    borderRadius: '9999px',
});