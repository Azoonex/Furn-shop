import React, { createContext, useState } from "react";
import db from "../db.json";
import { TypePropsCardProduct, ContextType } from "../types/type";

export const ShopContext = createContext<ContextType>({
    cardProduct: [],
    addProduct: () => {},
    setCardPordoct: () => {},
    removeAllProducts: () => {},
    findalPrice: null,
    handlesizeContorler: () => {},
    setFindalPrice: () => {},
});

export const ProductContext = function ProductContxt({
    children,
}: {
    children: Required<React.ReactNode>;
}) {
    const [cardProduct, setCardPordoct] = useState<TypePropsCardProduct[]>([]);
    const [findalPrice, setFindalPrice] = useState<number | null>(null);

    function addProduct(id: number) {
        const findeIndexProduct = cardProduct?.findIndex((i) => i.id === id);

        if (findeIndexProduct === -1) {
            const newProduct = db.products.find((i) => i.id === id);
            newProduct &&
                setCardPordoct((prev) => [...prev, { ...newProduct, size: 1 }]);
        }
    }

    const handlesizeContorler = React.useCallback(
        function handlesizeContorler(id: number, status: "add" | "remove") {
            const index = cardProduct.findIndex((item) => item.id === id);
            setCardPordoct((prev) => {
                if (index !== -1) {
                    const copyIndex = [...prev]; // all []
                    const findeItemUpadte = { ...copyIndex[index] }; //finde index
                    status === "add"
                        ? (findeItemUpadte.size! += 1)
                        : (findeItemUpadte.size! -= 1); // change size
                    copyIndex[index] = findeItemUpadte; // replace
                    return copyIndex; // retrun
                }
                return prev;
            });
        },
        [cardProduct]
    );

    function removeAllProducts() {
        if (cardProduct.length > 0) setCardPordoct([]);
    }

    return (
        <ShopContext.Provider
            value={{
                cardProduct,
                addProduct,
                setCardPordoct,
                removeAllProducts,
                findalPrice,
                handlesizeContorler,
                setFindalPrice,
            }}>
            {children}
        </ShopContext.Provider>
    );
};
