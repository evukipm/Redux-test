export const goToUrl = (history, url) => {
    history.push(url);

};

export const goToHome = (history) => {
    const URL = '/';
    history.push(URL);
};

export const goToArticleDetail = (history, id) => {
    const URL = `/articulo/${id}`;
    history.push(URL);
};