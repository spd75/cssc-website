export const FlexCC = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

export const FlexCS = {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center'
};

export const FlexCSpace = {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between'
};

export const FlexCStretch = {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'stretch'
};

export const FlexColCStart = {
    flexDirection: 'column' as 'column',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
};

export const FlexColCC = {
    ...FlexCC,
    flexDirection: 'column' as 'column'
};

export const FlexColCSpace = {
    ...FlexCSpace,
    flexDirection: 'column' as 'column'
};

export const FlexCenterColText = {
    ...FlexColCC,
    textAlign: 'center' as 'center'
};

export const ImageCoverPartial = (imgPath: string) => ({
    backgroundImage: `url(${imgPath})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
});

export const ImageCover = (imgPath: string) => ({
    ...ImageCoverPartial(imgPath),
    width: '100%'
});

export const HeightWidth = (height: string, width: string) => ({
    height: height,
    width: width
});
