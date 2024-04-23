// import Logo from "../../assets/Logo.svg";
import Avatar from "../../assets/avatar.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MyPosts, PostContainer, ProfileCard, ProfileContent } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { SearchForm } from "./components/SearchForm";
import { PostCard } from "./components/PostCard";

export function Posts() {
  return (
    <>
      <ProfileCard>
        <img src={Avatar} alt="" />

        <ProfileContent>
          <header>
            <span className="username">Cameron Williamson</span>

            <a
              className="links"
              href="https://www.instagram.com/reel/CMUJrwOFHNK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            >
              <span className="open-github">Github</span>
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                size="xs"
                color="Dodgerblue"
              />
            </a>
          </header>

          <div className="profile-down">
            <span className="description">
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </span>

            <div className="list">
              <div className="category-profile">
                <FontAwesomeIcon icon={faGithub} />
                <span className="user">cameronwll</span>
              </div>
              <div className="category-profile">
                <FontAwesomeIcon icon={faBuilding} />
                <span className="org">Rocketseat</span>
              </div>
              <div className="category-profile">
                <FontAwesomeIcon icon={faUserGroup} />
                <span>32 seguidores</span>
              </div>
            </div>
          </div>
        </ProfileContent>
      </ProfileCard>

      <PostContainer>
        <SearchForm />

        <MyPosts>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </MyPosts>
      </PostContainer>
    </>
  );
}
