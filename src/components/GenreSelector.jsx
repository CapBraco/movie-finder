const GenreSelector  = ({ categories, onSelect }) => {
    return(
    <>
    <div className='genders'>
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
    </div>
    </>
    );
}

export default GenreSelector;