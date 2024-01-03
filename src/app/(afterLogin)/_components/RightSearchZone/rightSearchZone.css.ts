import {globalStyle, style} from "@vanilla-extract/css";

export const Search = style({
    position: 'fixed',
    height: '42px',
    width: 'inherit',
    borderRadius: '21px',
    backgroundColor: 'rgb(239, 243, 244)',
    marginTop: '6px',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
});

globalStyle(`${Search} > svg`, {
    marginLeft: '20px',
    fill: 'rgb(83, 100, 113)',
});

globalStyle(`${Search} > input`, {
    outline: 'none',
    backgroundColor: 'inherit',
    border: 'none',
    padding: '12px',
    marginLeft: '5px',
    fontSize: '15px',
});

export const FilterTitle = style({
    background: '#ffffff',
    padding: '12px 16px',
    color: 'rgba(15,20,25,1.00)',
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '16px',
    borderRadius: '16px',
    border: '1px solid rgb(239,243,244)',
    marginTop: '12px',
});

export const FilterSection = style({
    padding: '0 16px 12px',
    marginBottom: '16px',
    borderRadius: '16px',
    border: '1px solid rgb(239,243,244)',
});

globalStyle(`${FilterSection} > label`, {
    fontSize: '15px',
    fontWeight: 'bold',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
});


export const Radio = style({
    display: 'flex',
});

globalStyle(`${Radio} > div`, {
    flex: '1',
});
