import useData from "./useData";
interface Platform{
    id: number,
    name: string,
    slug:string
}

const usePlateform = () => useData<Platform>('/platforms/lists/parents')
export default usePlateform;