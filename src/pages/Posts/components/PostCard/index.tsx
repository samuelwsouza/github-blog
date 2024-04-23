import { Link } from "react-router-dom";
import { PostUnityContainer } from "./styles";

// quando tiver props = /${postId} no meu link

export function PostCard() {
  return (
    <Link to={`/postinfo`} style={{ textDecoration: "none", color: "inherit" }}>
      <PostUnityContainer>
        <header>
          <h1>JavaScript data types and data structures</h1>
          <span>Há 1 dia</span>
        </header>

        <span className="summary">
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. These can be used to build other data structures. These
          can be used to build other data structures.
        </span>
        <div className="gradient-overlay"></div>
      </PostUnityContainer>
    </Link>
  );
}
