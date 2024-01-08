import {globalStyle, style} from "@vanilla-extract/css";

export const Wrapper = style({
    width: '600px',
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
    display: 'flex',
    height: '53px',
    alignItems: 'center',
});

export const HeaderTitle = style({
    fontSize: '20px',
    fontWeight: 'bold',
    marginLeft: '30px',
});

export const UserZone = style({
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid rgb(239, 243, 244)',
    padding: '12px 16px',
});


export const UserImage = style({
    display: 'flex',
    alignItems: 'center',
    marginRight: '12px',
    borderRadius: '50%',
});

globalStyle(`${UserImage} img`, {
    width: '134px',
    borderRadius: '50%',
});

export const UserName = style({
    margin: '0 12px',
    flex: 1,
});

globalStyle(`${UserName} div:first-child`, {
    fontWeight: 'bold',
    fontSize: '20px',
});

globalStyle(`${UserName} div:last-child`, {
    fontSize: '15px',
});

export const FollowButton = style({
    border: '1px solid rgb(207, 217, 222)',
    padding: '0 16px',
    borderRadius: '17px',
    height: '34px',
    backgroundColor: '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '15px',
    color: 'white',
    cursor: 'pointer',

    ':hover': {
        backgroundColor: 'rgb(39,44,48)',
    }
});

export const SinglePostWrapper = style({
    width: '600px',
    borderColor: 'rgb(239, 243, 244)',
    borderRightWidth: '1px',
    borderLeftWidth: '1px',
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
});

export const SinglePostHeader = style({
    display: 'flex',
    height: '53px',
    alignItems: 'center',
});

export const SinglePostHeaderTitle = style({
    fontSize: '20px',
    fontWeight: 'bold',
    marginLeft: '30px',
});

