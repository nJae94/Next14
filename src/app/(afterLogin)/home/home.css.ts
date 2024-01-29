import {keyframes, style} from "@vanilla-extract/css";

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

const rotating = keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
});

export const Loading = style({
    animation: `${rotating} 2s linear infinite`,
});