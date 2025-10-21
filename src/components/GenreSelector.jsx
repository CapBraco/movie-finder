const GenreSelector  = ({ categories, onSelect }) => {
    return(
    <>
    <label>Select Gender: </label>
      <select 
      id='genres' 
      className="movie-list"
      onChange={(e) => onSelect(e.target.value)}
      >
        {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
        ))}
      </select>
    </>
    );
}

export default GenreSelector;