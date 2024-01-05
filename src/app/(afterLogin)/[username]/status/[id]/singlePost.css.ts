import {style} from "@vanilla-extract/css";

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
