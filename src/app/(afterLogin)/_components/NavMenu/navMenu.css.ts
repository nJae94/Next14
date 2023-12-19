import {globalStyle, style} from "@vanilla-extract/css";
import {Logo} from "@/app/(afterLogin)/layout.css";

export const Wrapper = style({
    listStyle: 'none',
    paddingLeft: '0',
    height: 'inherit'
});
export const Item = style({
    display: 'inline-flex',
    height: '50px',
    padding: '12px',
    alignItems: 'center',

    ':hover': {
        backgroundColor: 'rgba(15, 20, 25, 0.1)',
        borderRadius: '30px',
    },
});

globalStyle((`${Item} > div`), {
    marginRight: '16px',
    marginLeft: '20px',
    fontSize: '20px'
});