import React, {
    createContext,
    Dispatch,
    SetStateAction,
    useState,
} from "react";
import db from "../db.json";
import { TypePropsCardProduct, TypeSizeProduct } from "../types/type";

type ContextType = {
    cardProduct: TypePropsCardProduct[];
    addProduct: (id: number) => void;
    setCardPordoct: Dispatch<SetStateAction<TypePropsCardProduct[]>>;
    removeAllProducts: () => void;
    findalPrice: number | null;
    HnadleDecrementProduct: (id: number) => void;
};

export const ShopContext = createContext<ContextType>({
    cardProduct: [],
    addProduct: () => {},
    setCardPordoct: () => {},
    removeAllProducts: () => {},
    findalPrice: null,
    HnadleDecrementProduct: () => {},
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

    function HnadleDecrementProduct(id: number) {
        const findeIndexProduct = cardProduct?.findIndex((i) => i.id === id);

        if (findeIndexProduct !== -1) {
            const productToUpdate = cardProduct.find((i) => i.id === id);
            if (productToUpdate) {
                productToUpdate.size! += 1;
            }

            setCardPordoct(productToUpdate);
        }
    }

    // useEffect(() => {
    //     if (sizeProduct.length > 0) {
    //         const sumWithInitial = sizeProduct.reduce(
    //             (accumulator, currentValue) => accumulator + currentValue.size!,
    //             0
    //         );
    //         setFindalPrice(sumWithInitial);
    //     }
    // }, [sizeProduct]);

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
                HnadleDecrementProduct,
            }}>
            {children}
        </ShopContext.Provider>
    );
};
