import {globalStyle, style} from "@vanilla-extract/css";

export const Wrapper = style({
    display: "flex",
    alignItems: 'stretch',
    backgroundColor: 'white',
});

export const LeftWrapper = style({
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
    flexGrow: 1,
});

export const RightWrapper = style({
    display: 'flex',
    alignItems: 'flex-start',
    height: '100dvh',
    justifyContent: 'center',
    flexGrow: 1,
});

export const Left = style({
    width: '275px',
    height: '100dvh',
});

export const LogoWrapper = style({
    position: 'fixed',
    width: 'inherit',
    height: '100dvh',
    display: 'flex',
    flexDirection: 'column',
});

export const Logo = style({
    display: 'inline-block',
    height: '56px',
    marginTop: '2px',
})


export const LogoPill = style({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
    width: '50x',
    borderRadius: '50%',

    ':hover': {
        backgroundColor: 'rgba(15, 20, 25, 0.1)',

    }
});

globalStyle((`${LogoWrapper} nav`), {
    flex:'1',
});

export const Content = style({
    width: '600px',
    height: '200dvh',
    marginRight: '20px'
});

export const Right = style({
    height: '100%',
    width: '990px',
    display: 'flex',
    justifyContent: 'center',
});

export const RightSection = style({
    width: '350px',
    height: '100%',
});

export const Search = style({
    position: 'fixed',
    width: 'inherit',
    height: '42px',
    borderRadius: '21px',
    marginTop: '6px',
    marginBottom: '12px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgb(239, 243, 244)',
});

globalStyle((`${Search} svg`), {
    marginLeft: '20px',
    fill: 'rgb(83, 100, 113)',
});

globalStyle((`${Search} input`), {
    backgroundColor: 'inherit',
    border: 'none',
    padding: '12px',
    marginLeft: '5px',
    fontSize: '15px',
    outline: 'none',
});

export const FollowRecommend = style({
  fontSize: '20px',
  fontWeight: 'bold',
  backgroundColor: 'rgb(247,249, 249)',
  borderRadius: '16px',
  margin :'12px 0',
  padding: '12px 16px',
});

globalStyle((`${FollowRecommend} h3`), {
     paddingBottom: '12px'
});
