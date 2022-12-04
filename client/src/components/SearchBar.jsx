import styled from 'styled-components'

const SearchBarContainer = styled.div`
    position: relative;
    margin-top: 50px;
    margin-bottom: 70px;
    height: 63px;
    width: 900px;

    .input {
        position: absolute;
        height: 63px;
        width: 860px;
        padding-left: 20px;
        padding-right: 20px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 30px;

        color: #818181;

        border: none;
        background: #FFFFFF;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
    }

    .input: focus{
        outline: 1px solid #e9e9e9;
    }
`;

function SearchBar({search,onChange}) {
    return (
        <SearchBarContainer>
            <input className="input" type="text" placeholder="Search..." value={search} onChange={onChange}/>
        </SearchBarContainer>
    )
}

export default SearchBar;