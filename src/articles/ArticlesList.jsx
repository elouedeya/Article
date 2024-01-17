import axios from "axios";
import { useEffect, useReducer } from "react";
import Swal from "sweetalert2";
import articleReducer from "../Context/ArticleReducer";

const ArticlesList = () => {
  const initialState = {
    articles: []
  };

  const [state, dispatch] = useReducer(articleReducer, initialState);

  const getAllArticle = async () => {
    try {
      const response = await axios.get("http://localhost:3000/article");
      dispatch({ type: "SET_ARTICLES", payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteArticle = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      try {
        if (result.isConfirmed) {
          const response = await axios.delete(
            `http://localhost:3000/article/${id}`
          );
          if (response.status === 200) {
            dispatch({ type: "DELETE_ARTICLE", payload: id });
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
          }
        }
      } catch (error) {
        console.error(error);
      }
    });
  };

  useEffect(() => {
    getAllArticle();
  }, []);

  return (
    <>
      <h1>List of articles</h1>
      {state.articles &&
        state.articles.map((article) => (
          <div key={article.id}>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <button
              onClick={() => deleteArticle(article.id)}
              className="btn btn-danger btn-sm"
            >
              Delete Article
            </button>
          </div>
        ))}
    </>
  );
};

export default ArticlesList;
