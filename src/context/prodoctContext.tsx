import React, {
    createContext,
    Dispatch,
    SetStateAction,
    useState,
} from "react";

interface typecard {
    id: number;
    amount: number;
    size: number;
}

type ContextType = {
    cardProduct: typecard[];
    addProduct: (id: number, product: typecard) => void;
    setCardPordoct: Dispatch<SetStateAction<typecard[]>>;
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
    const [cardProduct, setCardPordoct] = useState<typecard[]>([]);

    function addProduct(id: number, product: typecard) {
        const findeIndexProduct = cardProduct?.findIndex((i) => i.id === id);

        console.log(findeIndexProduct);

        if (findeIndexProduct === -1) {
            console.log("hansan");
            const newProduct = { ...product };
            setCardPordoct((prev) => [...prev, newProduct]);
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
