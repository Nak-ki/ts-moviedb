import {createContext, FC, PropsWithChildren, useState} from "react";
import {ISetState} from "../types/setTextType";



const Context = createContext<{ with_genres: number, setWithGenres:ISetState<number> }>(null)
const Context1 = createContext<{searchWord: string, setSearchWord:ISetState<string>}>(null)
interface IProps extends PropsWithChildren {

}

const ContextProvider: FC<IProps> = ({children}) => {

    const [with_genres, setWithGenres] = useState<number>(null)
    const [searchWord, setSearchWord] = useState<string>(null)

    return (
        <Context.Provider value={{with_genres, setWithGenres}}>
            <Context1.Provider value={{searchWord, setSearchWord}}>

                {children}

            </Context1.Provider>
        </Context.Provider>
    );
};

export {
    ContextProvider,
    Context,
    Context1
};
