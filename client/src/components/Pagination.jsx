import { useEffect, useState } from "react";
import styled from "styled-components";

const sliceArrayByLimit = (totalPages, pageLimit) => {
  const totalPageArray = Array(totalPages)
    .fill()
    .map((_, i) => i);
  return Array(Math.ceil(totalPages / pageLimit))
    .fill()
    .map(() => totalPageArray.splice(0, pageLimit));
};

function Pagination({ total, limit, page, setPage }) {
  const [currentPageArray, setCurrentPageArray] = useState([]);
  const [totalPageArray, setTotalPageArray] = useState([]);
  const totalPages = Math.ceil(total / limit);
  const pageLimit = 10;

  useEffect(() => {
    if (page % pageLimit === 1) {
      setCurrentPageArray(totalPageArray[Math.floor(page / pageLimit)]);
    } else if (page % pageLimit === 0) {
      setCurrentPageArray(totalPageArray[Math.floor(page / pageLimit) - 1]);
    }
  }, [page]);

  useEffect(()=> {
    const slicePageArray = sliceArrayByLimit(totalPages, pageLimit);
    setTotalPageArray(slicePageArray);
    setCurrentPageArray(slicePageArray[0]);
  },[totalPages]);

  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>
        {currentPageArray?.map((i) => (
            <Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              aria-current={page === i + 1 ? "page" : null}
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
          &gt;
        </Button>
      </Nav>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  width: 38px;
  height: 38px;
  border: none;
  border-radius: 19px;
  padding: 8px;
  margin: 0;
  background: none;
  color: black;
  font-size: 20px;

  &:hover {
    cursor: pointer;
    transform: translateY(-1px);
  }

  &[disabled] {
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: black;
    color: white;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

export default Pagination;