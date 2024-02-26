import { createContext ,useContext} from "react";

let CartContext = createContext();
export default CartContext;

let useCart = ()=> {
    const context = useContext(CartContext);
    return context;
}
export {useCart}