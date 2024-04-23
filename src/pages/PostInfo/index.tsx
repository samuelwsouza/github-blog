import { Link } from "react-router-dom";
import { ContentCard, TitleCard } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CodeHighlighter from "../../lib/HighlightLanguages";

export function PostInfo() {
  return (
    <>
      <TitleCard>
        <header>
          <Link to="/">
            <span className="items-head">
              <FontAwesomeIcon
                icon={faChevronLeft}
                size="sm"
                color="Dodgerblue"
              />
              Voltar
            </span>
          </Link>

          <Link to="/postinfo">
            <span className="items-head">
              Ver no Github
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                size="sm"
                color="Dodgerblue"
              />
            </span>
          </Link>
        </header>

        <div className="card-down">
          <span className="theme-title">
            JavaScript data types and data structures
          </span>

          <div className="list">
            <div className="category-profile">
              <FontAwesomeIcon icon={faGithub} />
              <span className="user">cameronwll</span>
            </div>
            <div className="category-profile">
              <FontAwesomeIcon icon={faCalendarDay} />
              <span className="org">Há 1 dia </span>
            </div>
            <div className="category-profile">
              <FontAwesomeIcon icon={faComment} />
              <span>5 comentários</span>
            </div>
          </div>
        </div>
      </TitleCard>

      <ContentCard>
        <div className="issue-summary">
          <span className="summary">
            <strong>
              Programming languages all have built-in data structures, but these
              often differ from one language to another.
            </strong>{" "}
            This article attempts to list the built-in data structures available
            in JavaScript and what properties they have. These can be used to
            build other data structures. Wherever possible, comparisons with
            other languages are drawn.
          </span>

          <p className="special-underline">Dynamic typing</p>

          <p className="special-underline-summary">
            JavaScript is a loosely typed and dynamic language. Variables in
            JavaScript are not directly associated with any particular value
            type, and any variable can be assigned (and re-assigned) values of
            all types:
          </p>
        </div>

        <div className="code-area">
          <CodeHighlighter />
        </div>
      </ContentCard>
    </>
  );
}
