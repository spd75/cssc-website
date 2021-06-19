export const FlexCC = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

export const FlexCS = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

export const FlexCenterColText = {
    ...FlexCC,
    flexDirection: 'column' as 'column',
    textAlign: 'center' as 'center'
};

export const ImageCover = (imgPath: string) => ({
    backgroundImage: `url(${imgPath})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '100%'
});

export const HeightWidth = (height: string, width: string) => ({
    height: height,
    width: width
});
