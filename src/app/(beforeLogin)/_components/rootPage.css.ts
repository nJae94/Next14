import {globalStyle, style} from "@vanilla-extract/css";

export const Wrapper = style({
    display: "flex",
    width: '100dvw',
    height: '100dvh',
})

export const Left = style({
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

});

globalStyle(`${Left} h1`, {
    margin: '10px',
    fontSize: '64px'
});

globalStyle(`${Left} h2`, {
    fontSize: '32px',
    marginBottom: '32px'
});

globalStyle(`${Left} h3`, {
    fontSize: '24px',
    marginBottom: '20px',
    marginTop: '40px'
});

export const Right = style([Left]);

export const Signup = style({
    fontSize: '16px',
    width: '300px',
    height: '40px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(29, 155, 240)',

    ':hover': {
        backgroundColor: 'rgb(26, 140, 216)'
    }
})

export const Login = style({
    fontSize: '16px',
    width: '300px',
    height: '40px',
    color:' rgb(29, 155, 240)',
    border: '1px solid rgb(207, 217, 222)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    ':hover': {
        backgroundColor: 'rgba(29,155,240,0.1)'
    }
});
