"use client";
import React, { useState } from "react";
import { CartItem, CartProvider } from "./cart";

export const CartContextWrap = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [items, setCart] = useState([] as CartItem[]);

  const total = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const addToCart = (item: CartItem) => {
    const existingItem = items.find((i) => i.id === item.id);
    if (existingItem) {
      const newItems = items.map((i) => {
        if (i.id === item.id) {
          return {
            ...i,
            quantity: i.quantity + 1,
          };
        }
        return i;
      });
      setCart(() => {
        return newItems;
      });
    } else {
      setCart((prevItem) => {
        return [...prevItem, item];
      });
    }
  };

  const removeFromCart = (id: string) => {
    const existingItem = items.find((i) => i.id === id);
    if (!existingItem || existingItem?.quantity === 1) {
      return setCart(items.filter((item) => item.id !== id));
    }
    const newItems = items.map((i) => {
      if (i.id === id) {
        return {
          ...i,
          quantity: i.quantity - 1,
        };
      }
      return i;
    });
    setCart(() => {
      return newItems;
    });
  };

  return (
    <CartProvider
      value={{ items, total, addItem: addToCart, removeItem: removeFromCart }}
    >
      {children}
    </CartProvider>
  );
};
