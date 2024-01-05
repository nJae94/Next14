import {globalStyle, style} from "@vanilla-extract/css";

export const Wrapper = style({
    display: 'flex',
    flexDirection: 'column',
    padding: '12px 16px',
    borderColor: 'rgb(239, 243, 244)',
    borderBottomWidth:' 1px',
    borderBottomStyle: 'solid',
    transitionProperty: 'background-color, box-shadow',
    transitionDuration:' 0.2s',
    cursor: 'pointer',

    ':hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.03)'

    }
});

export const PostSection =  style({
    display: 'flex',
    flexDirection: 'row',
});

export const PostReposted = style({
    display: 'flex',
    alignItems: 'center',
    color: 'rgb(83, 100, 113)',
    marginLeft: '24px',
    fontSize: '13px',
    lineHeight: '20px',
});

globalStyle(`${PostReposted} svg`, {
    fill: 'rgb(83, 100, 113)'
});

export const PostUserSection =  style({
    marginRight: '12px',
    width: '40px',
});

export const PostUserImage = style({
    position: 'relative',
    display: 'inline-block',
    width: '40px',
    height: '40px',
    borderRadius: '20px',
})

export const PostShade = style({
    display: 'inline-block',
    width:' 40px',
    height: '40px',
    borderRadius: '20px',
    position: 'absolute',
    top: '0',
    left: '0',

    ':hover': {
        backgroundColor: 'rgba(26, 26, 26, 0.15)'

    }
});

globalStyle(`${PostUserSection} img`, {
    width: '40px',
    height: '40px',
    borderRadius: '20px',
});


export const PostUserName = style({
    fontWeight: 'bold',
});

export const PostUserNick = style({
    color: 'rgb(83, 100, 113)',
});

export const PostDate = style([PostUserNick, {
    display: 'flex',
    alignItems: 'center',
}]);

export const PostBody = style({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',

    ':hover': {
        textDecoration: 'underline'
    }
});

export const PostMeta = style({
    display: 'flex',
    flexDirection: 'row',
});

export const OneImage = style({
    maxHeight: '510px',
    backgroundRepeat: 'no-repeat',
});

export const twoImage = style({
    height: '272px',
    display: 'flex',
    flexDirection: 'row',
    gap: '2px',
});

globalStyle(`${twoImage} a, ${twoImage} a:first-child, ${twoImage} a:last-child `, {
    flex: '1',
});

export const ThreeImage = style({
    height: '272px',
    display: 'flex',
    flexDirection: 'row',
    gap: '2px',
});

export const FourImage = style({
    height: '272px',
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
    gridTemplateColumns: '1fr 1fr',
    gap: '2px',
});

export const PostImage = style({
    marginTop: '12px',
    width: '100%',
    borderRadius: '16px',
});

export const CommentButton = style({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
});

export const RepostButton = style([CommentButton]);

export const HeartButton = style([CommentButton]);

globalStyle(`${CommentButton} button, ${RepostButton} button, ${HeartButton} button`, {
    background: '#ffffff',
    border: 'none',
    outline: 'none',
    display: 'flex',
    width: '38px',
    height: '38px',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '19px',
    cursor: 'pointer',
    transitionProperty: 'background-color',
    transitionDuration: '0.2s',
    marginRight: '4px',
});

globalStyle(`${CommentButton} button`, {
    backgroundColor: 'rgba(29, 155, 240, 0.01)',
});

globalStyle(`${CommentButton}:hover svg`, {
    fill: 'rgb(29, 155, 240)',
});

globalStyle(`${RepostButton} button`, {
    backgroundColor: 'rgba(0, 186, 124, 0.01)',
});
