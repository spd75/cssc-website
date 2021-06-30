export const WHITE = '#FFF';
export const LIGHT_BLACK = '#505050';
export const WEB_BLUE = '#48A8DE';
export const WEB_BLUE_HOVER = '#4084CB';
export const MAIN_FONT = 'ARVO';
export const MAX_CONTENT = 'max-content';
export const FOOTER_TEXT = '©2021 Cornell Ski and Snowboard Club';

export const validateLength = (arr: any[], expectedLength: number, cause: string, comp: String) => {
    if (arr.length !== expectedLength) {
        const InvalidDataError = new Error(
            `${cause} for ${comp} component does not have correct length.`
        );
        InvalidDataError.name = `Invalid Data Error -- Occured in ${comp}`;
        throw InvalidDataError;
    }
};
