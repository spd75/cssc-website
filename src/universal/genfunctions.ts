export const validateLength = (arr: any[], expectedLength: number, cause: string, comp: String) => {
    if (arr.length !== expectedLength) {
        const InvalidDataError = new Error(
            `${cause} for ${comp} component does not have correct length.`
        );
        InvalidDataError.name = `Invalid Data Error -- Occured in ${comp}`;
        throw InvalidDataError;
    }
};
