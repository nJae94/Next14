import {globalStyle, style} from "@vanilla-extract/css";

export const Wrapper = style({
    padding: '12px 0',
    height: '66px',
    display: 'flex',
});

export const UserLogo = style({
    width: '40px',
    marginRight: '12px',
});

globalStyle(`${UserLogo} img`, {
    width: '40px',
    height: '40px',
    borderRadius: '20px',
});

export const UserInfo = style({
    flex: 1,
});


export const Title = style({
    fontSize: '15px',
    fontWeight: 'bold',
    lineHeight: '20px',
});

export const Count = style({
    color: 'rgb(83, 100, 113)',
    fontSize:'13px',
    lineHeight: '16px',
});

export const FollowButtonSection = style({
    width: '76px',
});

export const Button = style({
    border: 'none',
    cursor: 'pointer',
    width: '100%',
    color: 'white',
    background: '#000',
    fontSize: '14px',
    fontWeight: 'bold',
    height: '32px',
    borderRadius: '16px',

    ':hover': {
        backgroundColor: 'rgb(39,44,48)',
    }
});
