import usePlateform from "./usePlatforms";

const usePlatform = (id?: number) => {
    const { data: platforms } = usePlateform();
    return platforms?.results.find((platform) => platform.id === id);
}
export default usePlatform;