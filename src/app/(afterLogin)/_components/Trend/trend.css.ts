import {style} from "@vanilla-extract/css";

export const Wrapper = style({
    padding: '12px 16px',
    height: '82px',
    display: 'block',

    ':hover': {
        backgroundColor: 'rgba(0,0,0,0.03)',
    }
});

export const Title = style({
    fontSize: '15px',
    fontWeight: 'bold',
    lineHeight: '20px',
    marginTop: '2px',
    marginBottom: '4px',
});

export const Count = style({
    color: 'rgb(83, 100, 113)',
    fontSize:'13px',
    lineHeight: '16px',
    fontWeight: 'lighter',
});