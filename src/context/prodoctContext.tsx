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
    removeAllProducts: () => void;
    findalPrice: number | null;
    handleIncrementProduct: (id: number) => void;
    handleDecrement: (id: number) => void;
};

export const ShopContext = createContext<ContextType>({
    cardProduct: [],
    addProduct: () => {},
    setCardPordoct: () => {},
    removeAllProducts: () => {},
    findalPrice: null,
    handleIncrementProduct: () => {},
    handleDecrement: () => {},
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

    function handleIncrementProduct(id: number) {
        setCardPordoct((prev) => {
            const index = prev.findIndex((product) => product.id === id);

            if (index !== -1) {
                const updatedProducts = [...prev]; // Create a copy of the state array
                const productToUpdate = { ...updatedProducts[index] }; // Clone the product object
                productToUpdate.size! += 1; // Decrement the size
                updatedProducts[index] = productToUpdate; // Replace the updated product in the array
                return updatedProducts; // Return the updated state
            }

            return prev; // If the product is not found, return the previous state
        });
    }

    function handleDecrement(id: number) {
        const index = cardProduct.findIndex((item) => item.id === id);
        setCardPordoct((prev) => {
            if (index !== 1) {
                const copyIndex = [...prev]; // all []
                const findeItemUpadte = { ...copyIndex[index] }; //finde index
                findeItemUpadte.size! -= 1; // change size
                copyIndex[index] = findeItemUpadte; // replace and update
                return copyIndex; // retrun
            }
            return prev;
        });
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
                handleIncrementProduct,
                handleDecrement,
            }}>
            {children}
        </ShopContext.Provider>
    );
};
