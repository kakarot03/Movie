import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import MovieComponent from "../components/MovieComponent";
import { NavLink } from "react-router-dom";
import "./Movie.css";
import { logout } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import MovieInfoComponent from "../components/MovieInfoComponent";

export const API_KEY = "a9118a3a";

const Container = styled.div`
  margin-top: 83%;
  display: flex;
  flex-direction: column;
`;
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Header = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: white;
`;
const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;
const MovieImage = styled.img`
  width: 48px;
  height: 48px;
  margin: 15px;
`;
const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;
const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly; ;
`;
const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 150px;
  opacity: 50%;
`;

const LogoutButton = styled.button`
  width: fit-content;
  display: inline-block;
  margin-top: 10px;
  margin-left: 80%;
`;

const Movie = () => {
  const [searchQuery, updateSearchQuery] = useState("");
  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();
  const [filters, setFilters] = useState({});
  const [timeoutId, updateTimeoutId] = useState();
  const isUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const fetchData = async (searchString) => {
    let url = "";
    if (searchString) {
      url = `http://localhost:5000/api/fetch/Movie/?movie=${searchString}`;
    } else {
      url = "http://localhost:5000/api/fetch/getMovie";
    }
    const res = await Axios.get(url);
    console.log(res.data);
    updateMovieList(res.data);
  };

  const onTextChange = (e) => {
    clearTimeout(timeoutId);
    updateSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
    updateTimeoutId(timeout);
  };

  const handleLogOut = () => {
    // logout(dispatch);
  };

  return (
    <Container>
      <Header>
        <AppName>
          <MovieImage src="/icons/movie-icon.svg" />
          React Movie App
        </AppName>
        <SearchBox>
          <SearchIcon src="/icons/search-icon.svg" />
          <SearchInput
            placeholder="Search Movie"
            value={searchQuery}
            onChange={onTextChange}
          />
        </SearchBox>
      </Header>
      {/* <NavLink to={{ pathname: "/login" }}>
        <LogoutButton onClick={handleLogOut()}>Logout</LogoutButton>
      </NavLink> */}
      <MovieListContainer>
        {movieList?.length ? (
          movieList.map((movie, index) => (
            <MovieComponent key={index} movie={movie} />
          ))
        ) : (
          <Placeholder src="/icons/movie-icon.svg" />
        )}
      </MovieListContainer>
    </Container>
    // </div>
  );
};

export default Movie;
