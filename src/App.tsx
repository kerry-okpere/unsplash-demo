import Hero from "./components/Hero/index";
import SearchInput from "./components/SearchInput/index";
import Filters from "./components/Filters/index";
import Pagination from "./components/Pagination/index";
import Images from "./components/Images/index";
import { useEffect, useState } from "react";
import UsePhotos from "./hooks/UsePhotos";
import { ColorId, SearchOrderBy } from "unsplash-js";
import { Params } from "./types";

const initialState: Params = {
  query: "dogs",
  page: 1,
  orderBy: "relevant",
  color: undefined,
};

function App() {
  const [params, setParams] = useState<Params>(initialState);
  const { response, loading, error, getPhotos } = UsePhotos();

  const { query, page, orderBy, color } = params;

  useEffect(() => {
    getPhotos({
      query,
      page,
      orderBy,
      color,
    });

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [query, orderBy, color, page, getPhotos]);

  const updateState = (data: Partial<Params>) =>
    setParams((prev) => ({ ...prev, ...data }));

  const handleSearch = (query: string) => {
    // prevent duplicate request if previous value is the same as current value
    if (query === params.query) return;

    updateState({ ...initialState, query });
  };

  const nextPage = () => updateState({ page: params.page + 1 });

  const prevPage = () => updateState({ page: params.page - 1 });

  const reOrder = (orderBy: string) => {
    updateState({ orderBy: orderBy as SearchOrderBy });
  };

  const handleColorChange = (color: string) => {
    updateState({
      page: initialState.page,
      color: color as ColorId,
    });
  };

  return (
    <main>
      <Hero>
        <SearchInput
          placeholder="Dog, computers, aeroplane..."
          onSubmit={handleSearch}
        />
      </Hero>
      <section className="m-10">
        <Filters
          color={color}
          value={orderBy}
          onSelect={reOrder}
          onColorChange={handleColorChange}
        />
        <Images
          loading={loading}
          images={response?.results || []}
          error={error}
        />
        {response?.total ? (
          <Pagination
            page={page}
            total={response?.total || 0}
            onPrev={prevPage}
            onNext={nextPage}
          />
        ) : null}
      </section>
    </main>
  );
}

export default App;
