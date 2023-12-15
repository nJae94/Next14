import {style} from "@vanilla-extract/css";

export const Wrapper = style({
    display: "flex",
    width: '100dvw',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
});

export const Modal = style({
    backgroundColor: 'white',
    position: 'relative',
    top: '5%',
    maxWidth: '80vw',
    minWidth: '600px',
    borderRadius: '16px',
    display: "flex",
    flexDirection: "column",
    height: '450px'
})

export const ModalHeader = style({
    padding: '36px 80px 20px',
    fontSize: '31px',
    fontWeight: 'bold',
});

export const Form = style({
    display: 'flex',
    flexDirection: 'column',
    flex: '1'
});

export const Body = style({
    flex: '1',
    padding: '0 80px',
});

export const InputWrapper = style({
    display: 'flex',
    flexDirection: 'column',
    height: '56px',
    position: 'relative',
    margin: '12px 0'
});

export const InputLabel = style({
    fontSize: '13px',
    color: 'rgb(84, 100, 113)',
    width: '100%',
    display: 'inline-block',
    position: 'absolute',
    top: '0',
    border: '1px solid rgb(207, 217, 222)',
    borderRadius: '4px',
    height: '56px',
    padding: '8px 8px 0',

    ':focus-within': {
        color: 'red'
    }
});

export const Input = style({
    width: '100%',
    border: 'none',
    fontSize: '17px',
    marginTop: '16px',
    padding: '12px 8px 8px',
    outline: 'none'
})

export const ModalFooter = style({
    padding: '24px 80px',
});

export const ActionButton = style({
    width: '100%',
    height: '50px',
    borderRadius: '25px',
    backgroundColor: 'rgb(15, 20, 25)',
    color: 'white',
    fontSize: '17px',
    cursor: 'pointer',
    border: 'none',

    ':disabled': {
        opacity: '0.5'
    },

    ':hover': {
        backgroundColor: 'rgb(39,44,48)'
    }
})

export const CloseButton = style({
    width: '34px',
    height: '34px',
    borderRadius: '17px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: 'white',
    position: 'absolute',
    left: '16px',
    top: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',


    ':hover': {
        backgroundColor: 'rgba(15,20,25, 0.1)'
    }
});