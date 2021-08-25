const Search = (props) => {
    // console.log(props)
    return (
        <div>
            <h1>Search</h1>
            <form onSubmit={props.submit}>
                <input type='text' name='team' id='team'/>
                <label htmlFor='team'></label>
                <input type='text' name='league' id='league'/>
                <label htmlFor="league"></label>
                    {/* refactor with react calendar package */}
                <input type='date' name='date' id='date'/>
                <label htmlFor="date"></label>
                <input type='submit' value='Submit'/>
            </form>
        </div>
    )
}

export default Search;