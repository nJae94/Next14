import {globalStyle, style} from "@vanilla-extract/css";

export const PostSection = style({
    marginRight: '12px',
    width: '40px',
})

export const PostUserImage = style({
    width: '40px',
    height: '40px',
    borderRadius: '20px',
});

globalStyle(`${PostUserImage} > img`, {
    borderRadius: '20px',
});

export const PostFormWrapper = style({
    marginTop: '101px',
    display: 'flex',
    padding: '16px 16px 8px',
    borderColor: 'rgb(239, 243, 244)',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
});

globalStyle(`${PostFormWrapper} textarea`, {
    width: '100%',
    border: 'none',
    padding: '12px 0',
    fontSize: '20px',
    lineHeight: '24px',
    outline: 'none',
    resize: 'none'
})
export const PostInputSection = style({
    flex: '1'
})
export const PostButtonSection = style({
    width: '100%'
});

export const FooterButtons = style({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
});

export const FooterButtonLeft = style({
    flex: '1'
});

export const UploadButton = style({
    width: '34px',
    height: '34px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '17px',
    transitionDuration: '0.2s',
    backgroundColor: 'rgb(29, 155, 240, 0.01)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    ':hover': {
        backgroundColor: 'rgb(29, 155, 240, 0.1)'
    },
});

globalStyle(`${UploadButton} svg`, {
    fill: 'rgb(29,155,240)'
})

export const ActionButton = style({
    width: '94px',
    height: '36px',
    border: 'none',
    color: 'rgb(255, 255, 255)',
    fontWeight: '700',
    fontSize: '15px',
    borderRadius: '18px',
    backgroundColor: 'rgb(29, 155, 240)',

    ':hover' : {
        backgroundColor: 'rgb(26, 140, 216);'
    },
    ':disabled': {
        opacity: '0.5'
    }
})
