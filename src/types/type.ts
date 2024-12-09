import { Dispatch, SetStateAction } from "react";

export interface TypePropsCardProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    bgImg: string;
    size? : number
}


export type ContextType = {
    cardProduct: TypePropsCardProduct[];
    addProduct: (id: number) => void;
    setCardPordoct: Dispatch<SetStateAction<TypePropsCardProduct[]>>;
    removeAllProducts: () => void;
    findalPrice: number | null;
    handlesizeContorler: (id: number, status: "add" | "remove") => void;
    setFindalPrice: Dispatch<SetStateAction<number | null>>
};
