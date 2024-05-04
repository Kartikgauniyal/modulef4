// script.js
document.addEventListener("DOMContentLoaded", function() {
    const movies = [
        { title: 'The Shawshank Redemption', genre: 'Drama', year: 1994 },
        { title: 'The Godfather', genre: 'Crime', year: 1972 },
        { title: 'The Dark Knight', genre: 'Action', year: 2008 },
        { title: '12 Angry Men', genre: 'Drama', year: 1957 },
        { title: 'Schindler\'s List', genre: 'Drama', year: 1993 },
        { title: 'The Lord of the Rings: The Return of the King', genre: 'Fantasy', year: 2003 },
        { title: 'The Good, the Bad and the Ugly', genre: 'Western', year: 1966 },
        { title: 'Forrest Gump', genre: 'Drama', year: 1994 },
        { title: 'Inception', genre: 'Science Fiction', year: 2010 },
        { title: 'The Matrix', genre: 'Science Fiction', year: 1999 },
        { title: 'The Silence of the Lambs', genre: 'Thriller', year: 1991 },
        { title: 'Saving Private Ryan', genre: 'War', year: 1998 },
        { title: 'Jurassic Park', genre: 'Science Fiction', year: 1993 },
        { title: 'Terminator 2: Judgment Day', genre: 'Science Fiction', year: 1991 },
        { title: 'The Lion King', genre: 'Animation', year: 1994 }
    ];
     
    const genres = ["Drama", "Crime", "Action", "Fantasy", "Western", "Science Fiction", "Thriller", "War", "Animation"];

    const genreFilterContainer = document.getElementById('genre-filter');
    const movieListContainer = document.getElementById('movie-list');

    function renderGenreFilter() {

        const filterHeading = document.createElement('h4');
        filterHeading.textContent = 'Filter by Genre';
        genreFilterContainer.appendChild(filterHeading);

        
        genres.forEach(genre => {
            const button = document.createElement('button');
            button.textContent = genre;
            button.addEventListener('click', () => {
                filterMovies(genre);
            });
            genreFilterContainer.appendChild(button);
        });
    }

    function renderMovieList(filteredMovies = movies) {
        movieListContainer.innerHTML = ''; // Clear previous content
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        const headers = ['Title', 'Genre', 'Year'];

        const headerRow = document.createElement('tr');
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);

        filteredMovies.forEach(movie => {
            const row = document.createElement('tr');
            const cells = Object.values(movie);
            cells.forEach(cellData => {
                const td = document.createElement('td');
                td.textContent = cellData;
                row.appendChild(td);
            });
            tbody.appendChild(row);
        });

        table.appendChild(thead);
        table.appendChild(tbody);
        movieListContainer.appendChild(table);
    }

    function filterMovies(genre) {
        const filteredMovies = movies.filter(movie => movie.genre === genre);
        renderMovieList(filteredMovies);
    }     

    renderGenreFilter();
    renderMovieList();
});
