import {globalStyle, style} from "@vanilla-extract/css";

export const Main = style({
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

export const FormZone = style({
    paddingLeft: '16px',
    width: '566px',
    marginBottom: '60px',
})

export const TrendBackground = style({
    marginTop: '60px',
    backgroundColor: 'rgb(247, 249, 249)',
});

export const TrendWrapper = style({
    borderTop: '1px solid rgb(239, 243, 244)',
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '12px',
});

globalStyle(`${TrendWrapper} > h3`, {
    padding: '12px 16px'
})