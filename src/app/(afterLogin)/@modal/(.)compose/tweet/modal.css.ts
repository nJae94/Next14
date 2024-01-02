import {globalStyle, style} from "@vanilla-extract/css";

export const ModalBackground = style({
    width: '100vw',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: '10',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
});

export const Modal =style({
    background: '#ffffff',
    position: 'relative',
    top: '5%',
    maxWidth: '80vw',
    minWidth: '600px',
    maxHeight: '400px',
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
});

export const CloseButton = style({
    width: '34px',
    height: '34px',
    borderRadius: '17px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#fff',
    position: 'absolute',
    left: '8px',
    top: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    ':hover': {
        backgroundColor: 'rgba(15,20,25, 0.1)'
    }
});


export const ModalForm = style({
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
});

export const ModalBody = style({
    padding: '0 16px',
    flex: '1',
    marginTop: '54px',
    display: 'flex',
    flexDirection: 'row',
});

export const PostUserSection = style({
    marginRight: '12px',
    width: '40px',
});

export const PostUserImageWrapper = style({
    width: '40px',
    height: '40px',
    borderRadius: '20px',
});

export const PostUserImage = style({
    width: '40px',
    height: '40px',
    borderRadius: '20px',
})

export const InputWrapper = style({
    flex: '1',
})

export const Input = style({
    width: '100%',
    border: 'none',
    outline: 'none',
    fontSize: '20px',

    '::placeholder': {
        color: 'rgb(83, 100, 113)',
        fontFamily: 'Malgun Gothic',

    }
});
export const ModalFooter =  style({
    padding: '0 16px',
});

export const ModalDivider = style({
    width: '100%',
    borderBottom: '1px solid rgb(239, 243, 244)',
});

export const FooterButtons = style({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
});

export const FooterButtonLeft = style({
    flex: '1',
});

export const UploadButton = style({
    width: '34px',
    height: '34px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '17px',
    backgroundColor: 'rgb(29, 155, 240, 0.01)',
    transitionDuration: '0.2s',
    transitionProperty: 'background-color',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    ':hover': {
        backgroundColor: 'rgba(29, 155, 240, 0.1)',

    }
});

globalStyle(`${UploadButton} svg`, {
    fill: 'rgb(83, 100, 113)',
});

export const ActionButton = style({
    cursor: 'pointer',
    width: '94px',
    height: '36px',
    borderRadius: '18px',
    border: 'none',
    margin: '8px 0',
    backgroundColor: 'rgb(29, 155, 240)',
    color: 'white',
    fontSize: '17px',

    ':disabled': {
        opacity: '0.5',
    }
});