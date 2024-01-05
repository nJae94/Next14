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
});

export const Header = style({
    height: '53px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 16px',
});

globalStyle(`${Header} h3`, {
    fontWeight: 'bold',
    fontSize: '20px',
});

export const RoomWrapper = style({
    padding: '16px',
    display: 'flex',
    flexDirection: 'row',
    transitionProperty: 'background-color',
    transitionDuration: '0.2s',
    borderColor: 'rgb(239, 243, 244)',
    cursor: 'pointer',

    ':hover': {
        backgroundColor: 'rgb(239, 243, 244)',
    },
});

export const RoomUserImage = style({

});

globalStyle(`${RoomUserImage} img`, {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '16px',
});

export const RoomChatInfo = style({
    display: 'flex',
    flexDirection: 'column',
    color: '#536471',
    fontSize: '15px',
});

globalStyle(`${RoomChatInfo} b`, {
    color: 'black',
});
