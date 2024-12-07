import React, {
    createContext,
    Dispatch,
    SetStateAction,
    useState,
} from "react";
import db from "../db.json";
import { TypePropsCardProduct } from "../types/type";

type ContextType = {
    cardProduct: TypePropsCardProduct[];
    addProduct: (id: number) => void;
    setCardPordoct: Dispatch<SetStateAction<TypePropsCardProduct[]>>;
};

export const ShopContext = createContext<ContextType>({
    cardProduct: [],
    addProduct: () => {},
    setCardPordoct: () => {},
});

export const ProductContext = function ProductContxt({
    children,
}: {
    children: Required<React.ReactNode>;
}) {
    const [cardProduct, setCardPordoct] = useState<TypePropsCardProduct[]>([]);

    function addProduct(id: number) {
        const findeIndexProduct = cardProduct?.findIndex((i) => i.id === id);

        console.log(findeIndexProduct);

        if (findeIndexProduct === -1) {
            const newProduct = db.products.find((i) => i.id === id);
            newProduct && setCardPordoct((prev) => [...prev, newProduct]);
        }
    }

    return (
        <ShopContext.Provider
            value={{
                cardProduct,
                addProduct,
                setCardPordoct,
            }}>
            {children}
        </ShopContext.Provider>
    );
};
