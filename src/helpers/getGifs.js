
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=jGgE7sfd9sBUF9aYb9j42oUiVaRl1fuJ&q=${category}&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => ({

        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }));

    return gifs;

}