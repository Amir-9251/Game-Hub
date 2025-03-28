import useGenres from "./useGenres";


const useGenre = (id?: number) => {
    const { data: genre } = useGenres();
    return genre?.results.find((Genre) => Genre.id === id);
}
export default useGenre;