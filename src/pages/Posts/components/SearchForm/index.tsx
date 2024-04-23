import { SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <header className="input-header">
        <label htmlFor="search-post">Publicações</label>
        <span className="amount-posts">6 publicações</span>
      </header>
      <input id="search-post" type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  );
}
