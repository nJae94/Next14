import {globalStyle, style} from "@vanilla-extract/css";

export const ActionButtonsWrapper = style({
    display: 'flex',
    justifyContent: 'space-betwee',
    flexDirection: 'row',
    columnGap: '4px',
    marginTop: '12px',
});

globalStyle(`${ActionButtonsWrapper} svg`, {
    fill: 'rgb(83, 100, 113)'
});

export const Count = style([ActionButtonsWrapper,{
    fontSize: '13px',
    color: 'rgb(83, 100, 113)',
}]);