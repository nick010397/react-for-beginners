# Getting Started with Create React App(노마드:API연결로 영화사이트만들기)

기본적인 useState,useEffect를 사용해보면서 API 연결 ROUTER-DOM등 사용해서 영화사이트 구현하기


```js
 const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState([true]);
  const getMovies = async () => {
    const json = await (
      await fetch('API주소')
    ).json();
    setProducts(json.data);
    setLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, []);

  console.log(Movie);



```


