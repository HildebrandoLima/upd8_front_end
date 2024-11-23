const generateQueryString = (page = 1, perPage = 10, filters = {}) => {
    return new URLSearchParams({
        page,
        perPage,
        ...filters,
    }).toString();
};

export default generateQueryString;