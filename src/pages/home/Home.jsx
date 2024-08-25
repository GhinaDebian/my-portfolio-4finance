import React, { useEffect, useState } from "react";
import { Header } from "../../layout/header/Header";
import { Button } from "@mui/material";
import Footer from "../../layout/footer/Footer";
import Card from "../../components/card/Card";
import {
  arrayOfNumbers,
  devs,
  devsArrayOfString,
  people,
  blogData,
} from "../../utils/dummyData";
import PostCard from "../../components/postCard/PostCard";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(0);

  // fetch("https://jsonplaceholder.typicode.com/posts")
  //   .then((response) => response.json())
  //   .then((dataResp) => setPosts(dataResp));

  //or
  //( the importance of adding useEffect() is so that the program doesn't go into an infinite loop in requesting the  api)
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((dataResp) => setPosts(dataResp));
  //     .catch((err) => {
  //         setError(true);
  //         console.log(err);
  //      });
  // }, []);

  //or

  // useEffect(() => {
  //   setLoading(true);
  //   const getAllPosts = () => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => setPosts(res.data))
  //       .catch(() => {
  //         setError(true);
  //       })
  //       .finally(() => setLoading(false));
  //   };
  //   getAllPosts();
  // }, []);
  useEffect(() => {
    console.log("hey");
    setLoading(true);
    const getAllPosts = () => {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/photos?_start=${page}&_limit=5`
        )
        .then((response) => {
          setPosts((prev) => [...prev, ...response.data]);
        })
        .catch(() => {
          setError(true);
        })
        .finally(() => setLoading(false));
    };
    getAllPosts();
  }, [page]);
  console.log("page", page);
  //or

  // useEffect(() => {
  //   const getAllPosts = async () => {
  //     const fetchingPosts = await fetch(
  //       "https://jsonplaceholder.typicode.com/posts"
  //     );
  //     const jsonPosts = await fetchingPosts.json();
  //     setPosts(jsonPosts);
  //   };
  //   getAllPosts();
  //   setLoading(false);
  // }, []);

  // const numbers = [5, 10, 90, 3, 9];
  // const doubleNumbers = numbers.map((number) => number * 2);

  // const devWithId = devs.map((element, index) => {
  //   return { ...element, id: index + 1 };
  // });

  // const filterNumbers = arrayOfNumbers.filter((element) => element <= 15);

  // const filterYoungDevs = devs.filter((element) => element.age <= 34);
  // const findSpecificDevInfo = devs.find((element) => element.name === "Johnny");
  // const findSpecificDevIndex = devs.findIndex((element) => {
  //   return element.name === "Johnny";
  // });

  // const fillWithOnes = [...arrayOfNumbers];
  // fillWithOnes.fill(1, 6);
  // const isManager = devs.some((element) => {
  //   return element.role.toLowerCase() === "frontend";
  // });

  // const frontendAbove30Devs = devs.filter((element) => {
  //   return element.role.toLowerCase() === "frontend" && element.age > 30;
  // });
  // console.log("frontend and above 30:", frontendAbove30Devs);
  // console.log(arrayOfNumbers.filter((element) => element >= 0));
  // console.log(arrayOfNumbers.map((element) => element * 3));
  // console.log(devsArrayOfString.filter((element) => element.length >= 6));

  if (loading) return "Loading...";
  if (error) return <>Hey!!!!!!!! something went wrong</>;
  return (
    <div className="home">
      <ul>
        {!error &&
          posts?.map((post) => (
            <>
              <PostCard
                key={post?.id}
                id={post?.id}
                title={post?.title}
                url={post?.url}
              />
            </>
          ))}
      </ul>
      <Button variant="outlined" onClick={() => setPage((prev) => prev + 5)}>
        Load More
      </Button>
    </div>
  );
};

export default Home;
