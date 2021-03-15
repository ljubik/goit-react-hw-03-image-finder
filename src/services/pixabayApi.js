const apiKey = '19834065-125c9af840da0921b3970040a';

// export default class ImageApiService {
//   constructor({ query, page }) {
//     this.searchQuery = query;
//     this.page = page;
//     this.apiKey = "19851067-7c860a6e23d51e90a164e5364";
//   }

function fetchImage(searchQuery, page) {
  console.log(searchQuery);
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchQuery}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then(({ hits }) => {
      return hits;
    });
}

// changePage() {
//   this.page += 1;
// }

// resetPage() {
//   this.page = 1;
// }

// get query() {
//   return this.searchQuery;
// }
// set query(newQuery) {
//   this.searchQuery = newQuery;
// }
// }
export default fetchImage;
