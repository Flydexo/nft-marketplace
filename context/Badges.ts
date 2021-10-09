import { createContext } from "react";

const BadgesContext = createContext<{data: []}>({data:[]});
export default BadgesContext;